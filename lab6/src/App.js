import './App.css'
import Header from './components/Header/header.jsx'
import Home from './components/Home/home.jsx'
import Footer from './components/Footer/footer.jsx'
import Catalog from './components/Catalog/catalog.jsx'
import Item from './components/Item/item.jsx'
import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Cart from "./components/Cart/cart";
import Checkout from "./components/Checkout/checkout";
import Success from "./components/Checkout/success";
import Login from "./components/Login/login";
import Registration from "./components/Registration/registration";
import {useSelector} from "react-redux";

function App() {
    const mainPages = [{path: '/home', element: <Home/>},
        {path: '/catalog', element: <Catalog/>},
        {path: '/item', element: <Item/>},
        {path: '/cart', element: <Cart/>},
        {path: '/checkout', element: <Checkout/>},
        {path: '/success', element: <Success/>}];
    let renderedPages = [];
    const cart = useSelector(state => state.cart);
    renderedPages = mainPages.map((page, key) => {
        return <Route key={key} path={page.path} element={page.element}></Route>
    })
    return (
        <Router>
            <div className="App">
                {cart.isLogged ? <Header/> : null}
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path={'/registration'} element={<Registration/>}/>
                    {cart.isLogged ? renderedPages : null}
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
