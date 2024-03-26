import React from 'react'
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <footer className="pt-16">
            <section className='container upper-footer'>
                <ul className='flex justify-between flex-wrap'>
                    <li className="lg:w-1/4 sm:w-full">
                        <h3>About Us</h3>
                        <p className='leading-8'>
                            At Max Glass, our endeavour is to craft the safest and most beautiful
                            architectural material – toughened glass. We are a leading glass processor and supplier of
                            high quality toughened glass, which is manufactured in collaboration with the world leaders
                            in glass manufacturing, Saint Gobain.
                        </p>
                    </li>
                    <li className="lg:w-1/4 sm:w-full">
                        <h3>Links</h3>
                        <div className='flex flex-col leading-9'>
                            <Link to={"#"}>- Home</Link>
                            <Link to={"#"}>- About Us</Link>
                            <Link to={"#"}>- Fully Tempered &amp; Heat Strengthened Glass</Link>
                            <Link to={"#"}>- Double Glazed Glass</Link>
                            <Link to={"#"}>-  Trutuff Laminated Glass</Link>
                            <Link to={"#"}>- Privacy Policy</Link>
                            <Link to={"#"}>- Terms &amp; Conditions</Link>
                            <Link to={"#"}>- Contact Us</Link>
                        </div>
                    </li>
                    <li className="lg:w-1/4 sm:w-full">
                        <h3>Contact Us</h3>
                        <p>B-54, MG Road, Dhaulana Hapur, Uttar Pradesh-201301</p>
                        <p><a className="sh" href="tel:+917594093333"><span className="sh"><i
                            className="fas fa-mobile"></i> +91 75940 93333</span></a></p>
                        <p><a className="sh" href="mailto:marketing@trutuffglass.com"><span className="sh"><i
                            className="fas fa-envelope"></i> marketing@trutuffglass.com</span></a></p>
                    </li>
                </ul>
            </section>
            <div className="lower-footer py-7 px-6">
                <p className='mb-0 ml-32'>Copyright © 2020 Trutuff, All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer