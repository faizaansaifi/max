import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className="header bg-white z-10  flex justify-between items-center w-full py-2">
			<Link
				to="/"
				className="logo w-24">
				<img
					src="/images/others/logo.jpeg"
					alt="logo"
				/>
			</Link>

			<ul className="flex">
				<li className="applications">
					<Link to="#">Applications</Link>
					<ul className="app-sub-menu">
						<li>Tempered</li>
						<li>Smart Glass</li>
						<li>Insulated Glass</li>
						<li>Toughened Glass</li>
					</ul>
				</li>
				<li>
					<Link to="/products">Products</Link>
				</li>
				<li>
					<Link to="/contact-us">Contact Us</Link>
				</li>
				<li>
					<Link to="/about-us">About Us</Link>
				</li>
				<li>
					<Link to="/slider">Slider</Link>
				</li>
			</ul>
		</div>
	)
}

export default Header
