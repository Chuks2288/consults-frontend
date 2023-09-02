import React from 'react';
import HeroStyles from '../styles/HeroStyles.scss';
import { heroItem } from '../data';


const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero__top">
                <h2 className='title'>Jefferson Educational Consulting</h2>
                <span className='main'>A Mary Non-profit Corporation</span>
                <div className="hero__btns">
                    <button type='submit' className='hero__btn-1 btn'>Free Consultation</button>
                    <button type='submit' className='hero__btn-2 btn'>Learn More</button>
                </div>
            </div>
            <hr className='hero__underline' />
            <div className="hero__bottom">
                {heroItem.map((item, index) => (
                    <div className="hero__bottom-items">
                        <span className='hero__icon'>{<item.icon />}</span>
                        <span className='hero__name'>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero