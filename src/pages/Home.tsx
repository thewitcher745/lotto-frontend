import React from 'react';
import {Link} from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-blue-600 text-white p-4 text-center">
                <h1 className="text-4xl font-bold">Fortune Flip Lottery</h1>
                <p className="mt-2">Try your luck and win big!</p>
            </header>
            <main className="flex-grow flex flex-col items-center justify-center bg-primary p-4">
                <h2 className="text-2xl font-semibold mb-4">Welcome to Fortune Flip</h2>
                <p className="mb-6 text-center max-w-md">
                    Wanna know if you're one of the winners today? Check out the results now!
                </p>
                <Link to="/sign-in" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                    Sign in now
                </Link>
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2023 Fortune Flip Lottery. All rights reserved.</p>
                <div className="mt-2">
                    <Link to="/about" className="text-blue-400 hover:underline mx-2">About Us</Link>
                    <Link to="/support" className="text-blue-400 hover:underline mx-2">Support</Link>
                    <Link to="/terms" className="text-blue-400 hover:underline mx-2">Terms & Conditions</Link>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;