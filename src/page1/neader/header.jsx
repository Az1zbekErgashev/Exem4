import React from 'react';
import './header.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
const Header = () => {
    return (
        <div className='header'>
            <div className='Bigsearch'>
                <input type="search" placeholder='Search...' />
                <i className='bi bi-search'></i>
            </div>
            <div className='personBel'>
                <i className='bi bi-person'></i>
                <i className='bi bi-bell'></i>
            </div>
        </div>
    );
}

export default Header;
