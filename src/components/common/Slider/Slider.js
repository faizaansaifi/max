import React from 'react'
import Slider from 'react-slick'
import './style.scss'

export default function SimpleSlider() {
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 2000,
		autoplay: true,
		arrows: true,
	}
	return (
		<div className="slider-container">
			<Slider {...settings}>
				<div>
					<img
						src="/images/slide1"
						alt="slide1"
					/>
				</div>
				<div>
					<img
						src="/images/slide2"
						alt="slide2"
					/>
				</div>
				<div>
					<img
						src="/images/slide3"
						alt="slide3"
					/>
				</div>
				<div>
					<img
						src="/images/slide4"
						alt="slide4"
					/>
				</div>
				<div>
					<img
						src="/images/slide5"
						alt="slide5"
					/>
				</div>
				<div>
					<img
						src="/images/slide6"
						alt="slide6"
					/>
				</div>
			</Slider>
		</div>
	)
}
