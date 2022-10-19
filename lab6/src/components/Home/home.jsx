import './home.css'
import cat from '../../images/cat.jpg'
import Block from '../Block/Block.jsx'

function Home() {
    return (
        <div className='Home'>
            <div className='heading'>
                <img alt='cat' src={cat} />
                <h1>Do not let your cat get bored</h1>
            </div>
            <div className='toys'>
                <Block price={150} />
                <Block price={180} />
                <Block price={210} />
            </div>
            <button>View more</button>
        </div>
    )
}

export default Home;