import {Link, useNavigate} from 'react-router-dom';
import './header.css'
import {useDispatch} from "react-redux";
import {setIsLogged} from "../../storage/slice";

function Header() {
    const navigate = useNavigate();
    const dispatcher = useDispatch();
    return (
        <div className='Header'>
            <div className='header'>
                <div className='shop-name'>Cat store</div>
                <nav>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/catalog'>Catalog</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                    </ul>
                    <button onClick={() => {
                        localStorage.clear();
                        dispatcher(setIsLogged(false));
                        navigate('/');
                    }}>Sign out</button>
                </nav>
            </div>
            <hr />
        </div>
    )
}

export default Header;