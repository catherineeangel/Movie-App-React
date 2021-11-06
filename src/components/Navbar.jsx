import React from 'react';
import Logo from './Logo';
import SearchBox from './SearchBox';

const Navbar = (props) => {
    return(
        <div className="navbar">
            <Logo />

            <SearchBox />
        </div>

    )
}

export default Navbar