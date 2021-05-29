import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='hdr-home' to='/'>Home</Link>
        <div>
        <Link className='hdr-browse' to='browse'>Browse</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link className='hdr-sign-in' to='sign-in'>Sign In</Link>
        </div>
    </div>
);

export default Header;