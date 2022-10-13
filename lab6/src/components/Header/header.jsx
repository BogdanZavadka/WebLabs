import './header.css'

function Header() {
    return (
        <div className='header'>
            <div className='shop-name'>Cat store</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
            <button>Sign-in</button>
        </div>
    )
}

export default Header;