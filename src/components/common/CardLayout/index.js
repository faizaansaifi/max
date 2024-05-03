import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const CardLayout = (props) => {
	const { cards } = props
	return (
		<div className="card-layout">
			<ul className="flex flex-wrap justify-between">
				{cards.map((item) => {
					return (
						<li className="lg:w-3/12 sm:w-10/12 rounded-md p-4 mx-4 flex my-4">
							<div className={'w-6/12'}>
								<Link to={'#'} className="header">
									<h4 className="text-3xl font-bold">{item.title}</h4>
								</Link>
								<p className="leading-5">{item.description}</p>
								<Link to={'#'} className="more-link font-bold text-blue-950">
									Read More
								</Link>
							</div>
							<div className="w-6/12">
								<Link to={'#'} className="image">
									<img src={item.image} alt="card-layout" />
								</Link>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default CardLayout
