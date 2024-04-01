import './style.scss'
import Home from "./components/landing/Home";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import * as React from "react";
import About from "./pages/About";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SimpleSlider from "./components/common/Carousel";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  return (
    <div className="App">
<div className="navbar !fixed top-0 bg-white flex justify-between w-full z-10">
    <Link to='/'>Max Glass</Link>
    <ul className='flex'>
        <li className='mx-4'><Link to='/'>Home</Link></li>
        <li className='mx-4 applications'>
            <Link to='#'>Applications</Link>
            <ul className='app-sub-menu'>
                <li>Tempered</li>
                <li>Smart Glass</li>
                <li>Insulated Glass</li>
                <li>Toughened Glass</li>
            </ul>
        </li>
        <li className='mx-4'><Link to='/products'>Products</Link></li>
        <li className='mx-4'><Link to='/contact-us'>Contact Us</Link></li>
        <li className='mx-4'><Link to='/about-us'>About Us</Link></li>
        <li className='mx-4'><Link to='/slider'>Slider</Link></li>
    </ul>
</div>
        <div className='mt-8'>
            <Routes>
                {/*<Route path="/" element={<NavLinks />}>*/}
                <Route index element={<Home />} />
                <Route
                    path="about-us"
                    element={
                        <About />
                    }
                />
                <Route
                    path="slider"
                    element={
                        <SimpleSlider />
                    }
                />

                <Route path="*" element={<span>No Content</span>} />
                {/*</Route>*/}
            </Routes>
        </div>

    </div>
  );
}

export default App;
