import React from 'react';
import { aboutItem, aboutItem2 } from '../data';
import AboutStyles from '../styles/AboutStyles.scss';
import { HiInformationCircle } from 'react-icons/hi';

const AboutSub = () => {
    return (
        <div className='aboutSub'>
            <div className="aboutSub__top">
                {aboutItem.map((item) => (
                    <div className="aboutSub__top-content">
                        <span>{<item.icon />}</span>
                        <h2>{item.title}</h2>
                    </div>
                ))}
            </div>

            <div className="aboutSub__bottom">
                {aboutItem2.map((item, index) => (
                    <div className="aboutSub__bottom-content">
                        <span><item.icon /></span>
                        <div className="aboutSub__bottom-content2">
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutSub