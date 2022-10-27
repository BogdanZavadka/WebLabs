import './home.css'
import cat from '../../images/cat.jpg'
import Blocks from './blocks.jsx'
import { useState } from 'react';

function Home() {
    let [blocks, setBlocks] = useState([{ description: 'This is an amazing cat toy! Do not miss it' },
    { description: 'This toy is made from only natural materials! Do not miss it' },
    { description: 'This will not let your cat get bored! Do not miss it' }]);

    return (
        <div className='Home'>
            <div className='heading'>
                <img alt='cat' src={cat} />
                <h1>Do not let your cat get bored! Get a toy for it!</h1>
            </div>
            <Blocks blocks={blocks} className='toys'></Blocks>
            <button onClick={() =>
                setBlocks([{ description: 'This is an amazing cat toy! Do not miss it' },
                { description: 'This toy is made from only natural materials! Do not miss it' },
                { description: 'This will not let your cat get bored! Do not miss it' },
                { description: 'It is really cool toy for a cat!' },
                { description: 'Get a toy for your cat!' },
                { description: 'This toy is made from only natural materials!' }])
            }>View more</button>
        </div>
    )
}

export default Home;