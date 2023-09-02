import React from 'react';
import LegalStyles from '../styles/LegalStyles.scss';
import { legalPhotos } from '../data';

const Legal = () => {
    return (
        <section className='legal'>

            <div className="legal__top">
                <h2>Non-profit Legal <br /> Status</h2>
                <p>
                    Jefferson Education Consulting Inc, is a Mary non-profit public benefit corporation, recognized as tax exempt under Section 501(c)(3) of the United States Internal Revenue Code.
                </p>
            </div>

            <div className="legal__bottom">
                {legalPhotos.map((item, index) => (
                    <div className="legal__info">
                        <img src={item.photo} alt="" className='legal__photo' />
                        <div className="legal__info-content">
                            <h3>{item.name}</h3>
                            <span>{item.position}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Legal