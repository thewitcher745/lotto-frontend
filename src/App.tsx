import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from '@src/pages/Home';
import Navbar from '@src/components/Navbar';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;