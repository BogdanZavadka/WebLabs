import './Block.css'
import cat_toy from '../../images/cat_toy.jpg'

function Block(props) {
    return (
        <div className='block'>
            <img src={cat_toy} alt="toy" className='cat-toy' />
            <div>Cat toy</div>
            <div>Price: {props.price}hrn</div>
        </div>
    )
}

export default Block;
