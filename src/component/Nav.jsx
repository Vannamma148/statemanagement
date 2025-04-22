import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Data from './Data';
import ColorPicker from './ColorPicker';
import App from '../App'

export default function Nav() {
    return (
        <>
            <nav>
                <Link to="/"> Counter </Link>
                <Link to="/employee"> Data </Link>
                <Link to="/color"> Color Picker </Link>
            </nav>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/employee' element={<Data />} />
                <Route path='/color' element={<ColorPicker />} />
            </Routes></>
    )
}
