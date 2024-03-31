import './style.scss'
import Home from "./components/landing/Home";
import {Outlet, Route, Routes} from "react-router-dom";
import * as React from "react";
import About from "./pages/About";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SimpleSlider from "./components/common/Carousel";

function App() {
  return (
    <div className="App">

        <Routes>
            <Route path="/" element={<NavLinks />}>
                <Route index element={<Home />} />
                <Route
                    path="about"
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <About />
                        </React.Suspense>
                    }
                />
                <Route
                    path="slider"
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <SimpleSlider />
                        </React.Suspense>
                    }
                />
                {/*<Route*/}
                {/*    path="lazyload"*/}
                {/*    element={*/}
                {/*        <React.Suspense fallback={<>...</>}>*/}
                {/*            <LazyLoad />*/}
                {/*        </React.Suspense>*/}
                {/*    }*/}
                {/*/>*/}
                <Route path="*" element={<span>No Content</span>} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;



function NavLinks() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/slider">Slider</Nav.Link>
                        {/*<Nav.Link href="/lazyload">Slider</Nav.Link>*/}
                    </Nav>
                </Container>
            </Navbar>
            <br/>
    <Outlet />
        </>
    );
}
