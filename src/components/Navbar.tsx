import React from 'react';
import {Link} from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="navbar-logo">Fortune Flip</div>
            <ul className="navbar-links">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About us</Link>
                </li>
                <li>
                    <Link to={"/support"}>Support</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;