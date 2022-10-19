import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return (
        <div className='Header'>
            <div className='header'>
                <div className='shop-name'>Cat store</div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/catalog'>Catalog</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                    </ul>
                </nav>
            </div>
            <hr />
        </div>
    )
}

export default Header;