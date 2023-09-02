import React from 'react';
import { Logo } from '../images';
import MobileStyles from '../styles/MobileStyles.scss';
import { navItem, socialMediaIcons } from '../data';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { TiTimes } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { closeMobileView } from '../redux/slice/searchSlice';

const MobileDropdown = () => {

    const location = useLocation();
    const dispatch = useDispatch()

    const hideMobile = () => {
        dispatch(closeMobileView());
    }

    return (
        <div className='mobile slide-in-top'>
            <div className='mobile__close-btn'
                onClick={hideMobile}
            ><TiTimes /></div>
            <div className="mobile__top">
                <img src={Logo} alt="" className='mobile__logo' />
            </div>
            <div className="mobile__items">
                {navItem.map((item, index) => {

                    const isActive = location.pathname === item.path

                    return (
                        <NavLink to={item.path} className={`mobile__item ${isActive && "activeMobile"}`}

                        >
                            <span className='mobile__item-name'
                                onClick={hideMobile}
                            >{item.name}</span>
                        </NavLink>

                    )
                })}
            </div>
            <div className="contact__bottom">
                <p>Call us now:</p>

                <span className='contact__number'>+1 (240) 475 4592</span>

            </div>

            <div className="socialmedia__icons">
                {socialMediaIcons.map((item) => (
                    <div className="socialmedia__icon">
                        <span>{<item.icon />}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MobileDropdown