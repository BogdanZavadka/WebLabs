import {useDispatch, useSelector} from "react-redux";
import './cart.css'
import cat_toy from "../../images/cat_toy_smol.jpg";
import {addItem, removeItem} from "../../storage/slice";
import {Link} from "react-router-dom";

export default function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    let itemObjectList = cart.items;
    let totalPrice = 0;
    const handleIncreaseAmount = (item) => {
        dispatch(addItem(item))
    }
    const handleDecreaseAmount = (item) => {
        dispatch(removeItem(item))
    }
    if (cart.items.length === 0) {
        return (<div className='Cart'></div>)
    } else {
        for (let i of cart.items) {
            totalPrice += i.amount * i.price;
        }
        let itemsList = itemObjectList.map((item) => {
            return (<div className='block' key={itemObjectList.indexOf(item)}>
                <img src={cat_toy} alt="toy" className='cat-toy'/>
                <div className='description'>{item.description}</div>
                <button onClick={() => {
                    handleIncreaseAmount(item)
                }}>+
                </button>
                <div className='amount'>{item.amount}</div>
                <button onClick={() => {
                    handleDecreaseAmount(item)
                }}>-
                </button>
                <div className='price'>{item.price}hrn</div>
            </div>)
        })
        return (<div className='Cart'>
                <div>{itemsList}</div>
                <div className='total-price'>Total price: {totalPrice} hrn</div>
                <div className='cart-buttons'>
                    <Link to='/catalog'>
                        <button>Back to catalog</button>
                    </Link>
                    <Link to='/checkout'>
                        <button>Continue</button>
                    </Link>
                </div>
            </div>
        )
    }
}