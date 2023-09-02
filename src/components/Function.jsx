import React from 'react';
import FunctionStyles from '../styles/FunctionStyles.scss';
import { functItems } from '../data';

const Function = () => {
    return (
        <div className='function'>
            <div className="function__top">
                <h1 className='function__title'>Legal Practice Areas</h1>
                <p>Jefferson Educational Consulting Inc, is a full-service organization with expertise in workforce<br />
                    enhancement, family counseling, quality education experience and molding current education issues.<br />
                    The organization provides
                </p>
            </div>

            <div className="funct__items">
                {functItems.map((item, index) => (
                    <div className="funct__item">
                        <span className='funct__icon'>{<item.icon />}</span>
                        <h2 className='funct__title'>{item.title}</h2>
                        <p className='funct__content'>{item.content}</p>
                    </div>
                ))}
            </div>



            <div className="funct__bottom">
                <span className='view__btn'>View All Practice Areas</span>
            </div>
        </div>
    )
}

export default Function