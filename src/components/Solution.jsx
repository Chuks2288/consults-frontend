import React from 'react';
import ServiceStyles from '../styles/ServiceStyles.scss';
import { Link } from 'react-router-dom';
import { solutServiceItem } from '../data';

const Solution = () => {
    return (
        <section className='solution'>
            <div className="solution__left">
                <h1>We provide the best <br /> solutions</h1>
                <p>
                    Here at Jefferson Educational Consulting, excellence is not just a goal - it's our standard.
                    We take pride crafting solutions that aren't just good, but exceptional.
                    Our team of dedicated professionals brings wealth of experience and expertise to the
                    table, ensuring that every challenge you face is met with innovative,
                    tailored, and effective strategies.
                </p>

                <Link to="/contact" className='contact__btn'>
                    Contact Us
                </Link>
            </div>

            <div className="solution__right">
                {solutServiceItem.map((item, index) => (
                    <div className="solution__right-content">
                        <span>{<item.icon />}</span>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Solution