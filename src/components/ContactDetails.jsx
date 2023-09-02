import React from 'react';
import ContactStyles from '../styles/ContactStyles.scss';
import { jeff1 } from '../images';
import { Link } from 'react-router-dom';

const ContactDetails = () => {
    return (
        <div className="">
            <div className='contact__details'>
                <div className="contact__details-left">
                    <h2>Send Us a Message</h2>
                    <form action="">
                        <input type="text" placeholder='Name *' id='name' required />
                        <input type="email" placeholder='Email Address *' id='email' required />
                        <input type="text" placeholder='Subject' id='subject *' required />
                        <textarea name="" id="" cols="10" rows="6" placeholder='Comment or Message *' required />
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
                <div className="contact__details-right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.366894576652!2d-76.78291052406342!3d38.89272447172498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7952a02451fd9%3A0x1e50bd6f16fa10a2!2s201%20Dauntly%20St%2C%20Upper%20Marlboro%2C%20MD%2020774%2C%20USA!5e0!3m2!1sen!2sng!4v1692493878537!5m2!1sen!2sng" style={{ width: "600", height: "450", style: "border:0;", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }} />
                </div>
            </div>
            <div className="board__bottom">
                <div className="board__bottom-photo">
                    <img src={jeff1} alt="" />
                </div>
                <div className="board__bottom-content">
                    <h2>Connect with our Consulting Agency</h2>
                    <p>
                        Our team of dedicated professionals brings a wealth of experience and expertise to the table, ensuring that every challenge you face is met with innovative, tailored, and effective strategies.
                    </p>
                    <Link to="/contact" className='btn consult__btn'> Free Consultation</Link>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails