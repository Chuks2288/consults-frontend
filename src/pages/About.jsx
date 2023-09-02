import React from 'react';
import { Navbar, Footer, Address, AboutSub, Biography, Board } from '../components';
import AboutStyles from '../styles/AboutStyles.scss';

const About = () => {
    return (
        <div className='about'>
            <div className="about__hero-bg">
                <Navbar />
                <div className="about__hero-content">
                    <h2>About Us</h2>
                    <p>We are experienced Consulting Agency</p>
                </div>
            </div>
            <AboutSub />
            <Biography />
            <Board />
            <Address />
            <Footer />
        </div>
    )
}

export default About