import React from 'react';
import ContactStyles from '../styles/ContactStyles.scss';
import { contactHeroItems } from '../data';


const ContactHero = () => {
    return (
        <div className="">
            <div className='contact__hero-main'>
                <h1>Contact Us</h1>
                <p>Keep in touch with us</p>
            </div>

            <div className="contact__hero-sub">
                {contactHeroItems.map((item, index) => (
                    <div className="contact__hero-sub-content">
                        <span>{<item.icon />}</span>
                        <h3>{item.title}</h3>
                        <p>{item.info}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactHero