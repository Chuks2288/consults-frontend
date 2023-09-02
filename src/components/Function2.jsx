import React from 'react';
import ServiceStyles from '../styles/ServiceStyles.scss';
import { functServiceItem } from '../data';
import { jeffBg2 } from '../images';
import { Link } from 'react-router-dom';

const Function2 = () => {
    return (
        <section className='function__service' >
            <h2>Practice Areas</h2>
            <div className="funct__items2">
                {functServiceItem.map((item) => (
                    <div className="funct__item2">
                        <span className='funct__icon2'>{<item.icon />}</span>
                        <h2 className='funct__title2'>{item.title}</h2>
                        <p className='funct__content2'>{item.content}</p>
                    </div>
                ))}
            </div>

            <div className="function__service-bottom">
                <div className="image__container">
                    <img src={jeffBg2} alt="" />
                </div>
                <div className='function__service-bottom-content'>
                    <h2>Let us help you!</h2>
                    <p>
                        Let us help you unlock your potential and achieve your goals with our professional consulting services.
                    </p>
                </div>
                <Link to="/contact" className='function__service-button'>Contact Us</Link>
            </div>
        </section >
    )
}

export default Function2