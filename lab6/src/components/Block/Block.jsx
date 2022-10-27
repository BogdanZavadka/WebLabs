import './Block.css'
import cat_toy from '../../images/cat_toy.jpg'

function Block(props) {
    return (
        <div className='block-home'>
            <img src={cat_toy} alt="toy" className='cat-toy' />
            <div>Cat toy</div>
            <div>{props.description}</div>
        </div>
    )
}

export default Block;
