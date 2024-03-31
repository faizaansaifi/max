import React from "react";
import {Link} from "react-router-dom";
import SimpleSlider from "../common/Slider";

const Home = () => {
    return(
        <div className="home">
            <section className="self-ad text-center pt-16 px-28 pb-36">
                <h2>Max Glass</h2>
                <h4>FROM THE HOUSE OF MAX GLASS INDUSTRIES</h4>
                <p>Check out the amazing properties of toughened glass processed from the house of Max Glass Industries,
                    the first ISI – 2553 Part 1 Certified glass factory in North India.</p>
                <ul className='flex text-left justify-center mt-8'>
                    <li>
                        <h6> Our modified toughened glass is fire resistant</h6>
                    </li>
                    <li>
                        <h6> We offer reliable smart glass for privacy
                    </h6>
                    </li>
                    <li>
                        <h6> Special technology increases light transmittance</h6>
                    </li>
                    <li>
                        <h6> Special acoustic property delivers sound reduction</h6>
                    </li>
                    <li>
                        <h6> Increased strength and safety characteristics</h6>
                    </li>
                    <li>
                        <h6> Comes with thermal insulation Properties</h6>
                    </li>
                </ul>
            </section>
            <section>
                <SimpleSlider />
            </section>
            <section className='card-layout container'>
                <ul className='flex flex-wrap justify-between'>
                    <li className="lg:w-1/4 sm:w-3/4 rounded-md p-12 flex my-4">
                        <div className={"w-7/12"}>
                            <Link to={"#"} className='header'>
                                <h4 className='text-3xl font-bold'>Insulated Glass Unit</h4>
                            </Link>
                            <p className='leading-5'>Our Insulated Glass Units have two panes of glass separated with a
                                spacer.</p>
                            <Link to={"#"} className="more-link font-bold text-blue-950">Read More</Link>
                        </div>
                        <div className="w-5/12">
                            <Link to={"#"} className='image'>
                                <img src="/images/double-glazed-glass.webp" alt="insulated-glass"/>
                            </Link>
                        </div>
                    </li>
                    <li className="lg:w-1/4 sm:w-3/4 rounded-md p-12 flex my-4">
                        <div className={"w-7/12"}>
                            <Link to={"#"} className='header'>
                                <h4 className='text-3xl font-bold'>Laminated Glass</h4>
                            </Link>
                            <p className='leading-5'>It is a safety glass consisting of two or more glass layers.</p>
                            <Link to={"#"} className="more-link font-bold text-blue-950">Read More</Link>
                        </div>
                        <div className="w-5/12">
                            <Link to={"#"} className='image'>
                                <img src="/images/laminated-glass-2.webp" alt="laminated-glass"/>
                            </Link>
                        </div>
                    </li>
                    <li className="lg:w-1/4 sm:w-3/4 rounded-md p-12 flex my-4">
                        <div className={"w-7/12"}>
                            <Link to={"#"} className='header'>
                                <h4 className='text-3xl font-bold'>Tempered & Heat Strengthened </h4>
                            </Link>
                            <p className='leading-5'>
                                Our Fully Tempered and Heat Strengthened glasses and ..</p>
                            <Link to={"#"} className="more-link font-bold text-blue-950">Read More</Link>
                        </div>
                        <div className="w-5/12">
                            <Link to={"#"} className='image'>
                                <img src="/images/tempered-glass.webp" alt="tempered-glass"/>
                            </Link>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="applications container text-center">
                <h2>Applications</h2>
                <p>Our Glasses are perfectly suited for commercial applications such as building facades and shop fronts – and home applications like partitions, special flooring, staircases, and more.</p>
                <ul>
                    <li>
                        <article className='article-1'>
                            <Link to={"#"} className=''>
                                <span>Laminated Glass Unit – Applications</span>
                                <span>Read more</span>
                            </Link>
                        </article>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Home;