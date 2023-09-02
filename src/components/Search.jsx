import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchStyles from '../styles/SearchStyles.scss';
import { FiSearch } from 'react-icons/fi';
import { TiTimes } from 'react-icons/ti';
import { toggleDropdwn, OpenDropdown } from '../redux/slice/searchSlice';


const Search = () => {

    const dispatch = useDispatch();
    const { dropdown } = useSelector((state) => state.search);

    const dropClick = (e) => {
        dispatch(toggleDropdwn());
    }


    return (
        <>
            <div className="search__bar slide-in-top">
                <span className='close__btn'
                    onClick={dropClick}
                ><TiTimes /></span>
                <div className="search">
                    <input type="text" placeholder="Search" className='search__bar-search' />
                    <span className='search__btn'>
                        <FiSearch />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Search