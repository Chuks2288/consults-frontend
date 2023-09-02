import React from 'react';
import AddressStyles from '../styles/AddressStyles.scss';
import { addressInfo } from '../data';


const Address = () => {
    return (
        <div className='address'>
            <div className="address__left">
                <h1 className='address__left-header'>Get a Personal <br />Consultation</h1>
                <div className="address__left-infos">
                    {addressInfo.map((item, index) => (
                        <div className="address__left-info">
                            <span className='address__left-icon'>{<item.icon />}</span>
                            <div className="">
                                <h2 className='address__left-title'>{item.title}</h2>
                                <span>{item.info}</span> <br />
                                <span>{item.info2}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="address__right">
                <input type="text" className='address__right-name' placeholder='Name *' id='name' min="2" max="20" required />
                <input type="text" className='address__right-email' placeholder='Email Address *' id='email' min="2" max="20" required />
                <input type="text" className='address__right-subject' placeholder='Subject *' id='Subject' required />
                <textarea name="" className='address__right-message' id="" cols="30" rows="10" placeholder='Comment or Message *' required />
                <div className="button__container">
                    <button type='submit'>Send Message</button>
                </div>
            </div>

        </div>
    )
}

export default Address;