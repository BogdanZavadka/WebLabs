import cat_toy from '../../images/cat_toy.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './catalog.css'
function Items(props) {
    let sortBy = props.sortProps.sortBy;
    let sortOrder = props.sortProps.sortingOrder;
    let searchValue = props.searchValue;
    const [itemList, setItemList] = useState([{ 'price': 300, 'description': 'This is an amazing cat toy!' },
    { 'price': 400, 'description': 'This toy is made from only natural materials!' },
    { 'price': 100, 'description': 'This will not let your cat get bored!' },
    { 'price': 200, 'description': 'This is an amazing cat toy!' },
    { 'price': 150, 'description': 'A cool toy for your cat!' },
    { 'price': 600, 'description': 'This will not let your cat get bored!' }]);
    let sortedItems = [];
    let foundItems = itemList.filter(item => item.description.search(searchValue) !== -1);
    console.log(sortBy, sortOrder);
    if (sortBy === 'Price') {
        if (sortOrder === 'Ascending') {
            sortedItems = foundItems.sort(function (a, b) {
                return a.price > b.price ? 1 : -1;
            })
        }
        if (sortOrder === 'Descending') {
            sortedItems = foundItems.sort(function (a, b) {
                return a.price < b.price ? 1 : -1;
            })
        }
    } else {
        sortedItems = foundItems;
    }

    let renderedItems = sortedItems.map((item) =>
        <div className='block' key={itemList.indexOf(item)}>
            <img src={cat_toy} alt="toy" className='cat-toy' />
            <div>Cat toy</div>
            <div className='description'>{item.description}</div>
            <div>Price: {item.price}hrn</div>
            <Link to='/item' state={{ price: item.price, description: item.description }}>
                <button className='view-more'>View more</button>
            </Link>
        </div>);

    return (
        <div className='catalog'>
            {renderedItems}
        </div>
    )

}

export default Items;