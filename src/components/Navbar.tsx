import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaUser, FaHamburger} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import '@styles/components/Navbar.scss';

const Navbar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="navbar flex items-center py-3 px-1 relative sm:py-5 sm:px-3 justify-end sm:justify-normal">
            <div
                className="text-2xl font-bold mx-auto sm:relative sm:left-auto sm:transform-none absolute left-1/2 transform -translate-x-1/2">Fortune
                Flip
            </div>

            <ul className="hidden sm:flex flex-grow">
                <li className="ml-4">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="ml-3">
                    <Link to={"/about"}>About us</Link>
                </li>
                <li className="ml-3">
                    <Link to={"/support"}>Support</Link>
                </li>
                <li className="ml-auto mr-3">
                    <Link to={"/profile"}>
                        <FaUser/>
                    </Link>
                </li>
            </ul>
            <div onClick={toggleSidebar} className="sm:hidden cursor-pointer hover:scale-110 transition-transform transform text-3xl right-0 mr-2">
                <FaHamburger/>
            </div>
            <div className={`sm:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <button className="absolute top-4 right-4 text-xl" onClick={toggleSidebar}>
                    <IoMdClose />
                </button>
                <ul className="mt-16">
                    <li className="p-4 border-b active:bg-gray-300 transition-colors"><Link to={"/"} onClick={toggleSidebar}>Home</Link></li>
                    <li className="p-4 border-b active:bg-gray-300 transition-colors"><Link to={"/about"} onClick={toggleSidebar}>About us</Link></li>
                    <li className="p-4 border-b active:bg-gray-300 transition-colors"><Link to={"/support"} onClick={toggleSidebar}>Support</Link></li>
                    <li className="p-4 active:bg-gray-300 transition-colors"><Link to={"/profile"} onClick={toggleSidebar}>Profile</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;