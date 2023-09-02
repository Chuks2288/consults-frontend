import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navItem } from '../data';
import NavbarStyles from '../styles/NavbarStyles.scss';
import { Logo, Background } from '../images';
import { FiSearch } from 'react-icons/fi';
import { OpenDropdown, openMobileView, toggleMobileView } from '../redux/slice/searchSlice';
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileDropdown from './MobileDropdown';
import { TiTimes } from 'react-icons/ti';


const Navbar = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const { mobileView } = useSelector((state) => state.search);
    const dropClick = () => {
        dispatch(OpenDropdown())
    }
    const toggleMenu = () => {
        dispatch(openMobileView())
    }
    return (
        <div>
            <div className="navbar">
                <div className="navbar__left">
                    <div className="logo">
                        <img src={Logo} alt="" className='logo__img' />
                    </div>
                    <div className="menu__items">
                        {navItem.map((item, index) => {

                            const isActive = location.pathname === item.path
                            return (
                                <NavLink to={item.path} className={`menu__item ${isActive & "active"}`}>
                                    <span className='menu__item-name'> {item.name}</span>
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
                <div className="navbar__right">
                    <div className="searching"
                        onClick={dropClick}
                    >
                        <FiSearch className='search__bt' />
                    </div>
                    <div className="contact">
                        <span className='contact__number'>+1 (240) 475 4592</span>
                    </div>
                    <div className="menu__icon"
                        onClick={toggleMenu}
                    >
                        {mobileView ? <TiTimes /> : <GiHamburgerMenu />}
                    </div>

                    {mobileView &&
                        <div className="mobile__view">
                            <MobileDropdown />
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar