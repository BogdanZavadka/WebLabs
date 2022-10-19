import './catalog.css'
import cat_toy from '../../images/cat_toy.jpg'

function Catalog() {
    const itemList = [{ 'price': 300 },
    { 'price': 400 },
    { 'price': 100 },
    { 'price': 200 }];
    const renderedItems = itemList.map((item) =>
        <div className='block'>
            <img src={cat_toy} alt="toy" className='cat-toy' />
            <div>Cat toy</div>
            <div>Price: {item.price}hrn</div>
            <button>View more</button>
        </div>
    )
    return (
        <div className='Catalog'>
            <select name="Filter 1" id="select1">
                <option value="first">Filter 1</option>
            </select>
            <button>Apply</button>
            <div className='catalog'>
                {renderedItems}
            </div>
        </div>
    )
}

export default Catalog;

