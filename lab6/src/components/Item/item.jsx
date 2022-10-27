import { useLocation } from 'react-router-dom'
import cat_toy from '../../images/cat_toy.jpg'
import { Link } from 'react-router-dom'
import './item.css'

export default function Item() {
    const location = useLocation();
    const state = location.state;
    console.log(state);
    return (
        <>
            {state && (
                <div className='item-page'>
                    <div className='item-desc'>
                        <img src={cat_toy} alt="toy" />
                        <aside>
                            <h2>Cat toy</h2>
                            <div>{state.description}</div>
                        </aside>
                    </div>
                    <div className='business'>
                        <div className='price'>Price: {state.price} hrn</div>
                        <div className='buttons'>
                            <Link to='/catalog'>
                                <button>Go back</button>
                            </Link>
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}