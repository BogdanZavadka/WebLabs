import './main.css'
import cat from '../../images/cat.jpg'
import Block from '../Block/Block.jsx'

function Main() {
    return (
        <div className='Main'>
            <img alt='cat' src={cat} />
            <h1>Do not let your cat get bored</h1>
            <h2>Offers:</h2>
            <div className='toys'>
                <Block />
                <Block />
                <Block />
            </div>
        </div>
    )
}

export default Main;