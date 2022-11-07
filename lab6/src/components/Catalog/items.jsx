import cat_toy from '../../images/cat_toy.jpg'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './catalog.css'
import {getToys} from "../../API";
import Loader from "../Loader/loader";

function Items(props) {
    let sortBy = props.sortProps.sortBy;
    let sortOrder = props.sortProps.sortingOrder;
    let searchValue = props.searchValue;
    let [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 1000);
    useEffect(() => {
        getToys(sortBy, sortOrder).then(res => {
            let itemList = [];
            for (let i of res.data.cat) {
                itemList.push({id: i[0], description: i[1], price: i[2]})
            }
            setItemList(itemList);
        })
    }, [sortOrder, sortBy]);
    let foundItems = itemList.filter(item => item.description.search(searchValue) !== -1);
    let renderedItems = foundItems.map((item) =>
        <div className='block' key={itemList.indexOf(item)}>
            <img src={cat_toy} alt="toy" className='cat-toy'/>
            <div>Cat toy</div>
            <div className='description'>{item.description}</div>
            <div>Price: {item.price}hrn</div>
            <Link to='/item' state={{id: item.id, price: item.price, description: item.description}}>
                <button className='view-more'>View more</button>
            </Link>
        </div>);

    return (<>
            {loading ? <Loader/> :
                <div className='catalog'>
                    {renderedItems}
                </div>}
        </>
    )

}

export default Items;