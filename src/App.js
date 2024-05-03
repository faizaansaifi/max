import * as React from 'react'

import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/landing/Home'
import About from './pages/About'
import SimpleSlider from './components/common/Carousel'

import './style.scss'

import Header from './components/common/Header/Header'

function App() {
	return (
		<div className="App md:container md:mx-auto">
			<Header />

			<div className="">
				<Routes>
					{/*<Route path="/" element={<NavLinks />}>*/}
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="about-us"
						element={<About />}
					/>
					<Route
						path="slider"
						element={<SimpleSlider />}
					/>

					<Route
						path="*"
						element={<span>No Content</span>}
					/>
					{/*</Route>*/}
				</Routes>
			</div>
		</div>
	)
}

export default App
