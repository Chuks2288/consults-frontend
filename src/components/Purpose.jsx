import React from 'react';
import PurposeStyles from '../styles/PurposeStyles.scss';
import { purpItems, clientItem } from '../data';

const Purpose = () => {
    return (
        <section className='purpose__section'>
            <div className="purpose">
                <h1>Our Purpose</h1>
                <p>
                    Jefferson Educational Consulting is a non-profilt Corporation.
                    We focus on providing outstanding service to clients through workshops
                    and seminars that ultimately leads to healthy living and improving their
                    quality of life.
                </p>
            </div>

            <div className="purpose__bottom">
                {purpItems.map((item, index) => (
                    <div className="purpose__items">
                        <span><item.icon /></span>
                        <div className="purpose__item">
                            <h1 className='purpose__title'>{item.title}</h1>
                            <p className='purpose__content'>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>


            <div className="client">
                {clientItem.map((item, index) => (
                    <div className="client__item">
                        <h1>{item.count}</h1>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Purpose