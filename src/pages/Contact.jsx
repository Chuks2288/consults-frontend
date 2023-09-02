import React from 'react';
import { Navbar, Footer, Address, ContactHero, ContactDetails } from '../components';
import ContactStyles from '../styles/ContactStyles.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact__top">
                <Navbar />
                <div className="contact__hero-top">
                    <ContactHero />
                </div>
            </div>
            <ContactDetails />
            <Address />
            <Footer />
        </div>
    )
}

export default Contact