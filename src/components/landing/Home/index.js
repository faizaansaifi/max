import React from 'react'
import { Link } from 'react-router-dom'
import SimpleSlider from '../../common/Slider/Slider'
import Accordion from '../../common/Accordion'
import CardLayout from '../../common/CardLayout'
import { cards } from '../../../utils/constant'
import './style.scss'

const Home = () => {
	return (
		<div className="home w-full">
			<section>
				<SimpleSlider />
			</section>
			<section className="card-layout container">
				<CardLayout cards={cards} />
			</section>
			<section className="applications container text-center">
				<h2>Applications</h2>
				<p>
					Our Glasses are perfectly suited for commercial applications such as building facades and shop
					fronts – and home applications like partitions, special flooring, staircases, and more.
				</p>
				<ul className="flex justify-between">
					<li>
						<Link
							to={'/'}
							className="article"
							style={{ backgroundImage: "url('/images/home/shop-glass1.webp')" }}>
							<article>
								<span className="font-bold">Laminated Glass Unit – Applications</span>
								<button className="red-button">Read more</button>
							</article>
						</Link>
					</li>
					<li>
						<Link
							to={'/'}
							className="article"
							style={{ backgroundImage: "url('/images/home/shop-glass1.webp')" }}>
							<article>
								<span className="font-bold">Laminated Glass Unit – Applications</span>
								<button className="red-button">Read more</button>
							</article>
						</Link>
					</li>
					<li>
						<Link
							to={'/'}
							className="article"
							style={{ backgroundImage: "url('/images/home/shop-glass1.webp')" }}>
							<article>
								<span className="font-bold">Laminated Glass Unit – Applications</span>
								<button className="red-button">Read more</button>
							</article>
						</Link>
					</li>
				</ul>
			</section>
			<div className="wrapper">
				<Accordion title="Why is the sky blue?">
					Sunlight reaches Earth's atmosphere and is scattered in all directions by all the gases and
					particles in the air. Blue light is scattered more than the other colors because it travels as
					shorter, smaller waves. This is why we see a blue sky most of the time.
				</Accordion>
				<Accordion title="What's It Like Inside Jupiter?">
					It's really hot inside Jupiter! No one knows exactly how hot, but scientists think it could be about
					43,000°F (24,000°C) near Jupiter's center, or core.
				</Accordion>
				<Accordion title="What Is a Black Hole?">
					A black hole is an area of such immense gravity that nothing -- not even light -- can escape from
					it.
				</Accordion>
			</div>
		</div>
	)
}

export default Home
