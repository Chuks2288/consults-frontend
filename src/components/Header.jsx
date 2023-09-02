import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItem } from '../data';
import HeaderStyles from '../styles/HeaderStyles.scss';
import { Hero, Navbar, Search } from '../components';
import { useSelector } from 'react-redux';


const Header = () => {

    const location = useLocation();
    const { dropdown } = useSelector((state) => state.search);

    return (
        <header className='header'>
            <Navbar />
            <Hero />
            {dropdown && <Search />}
        </header>
    )
}

export default Header
