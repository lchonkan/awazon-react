/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css';
import logo from './awazon-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            {/* Amazon Logo*/}
            <img className='header__logo' src={logo} />

            {/* Search Bar */}
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' src={SearchIcon} />

                {/*Logo */}
            </div>

            {/* Header Nav Bar */}
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Return</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon className='' src={ShoppingBasketIcon} />
                    <span className='header__optionLineTwo header__basketCount'>0</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
