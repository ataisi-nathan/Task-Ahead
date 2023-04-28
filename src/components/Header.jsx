import { Link } from "react-router-dom";
import './header.css'

function Header() {
    return (
        <header>
            <h1>Pepper</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;