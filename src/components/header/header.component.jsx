import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='hdr-home' to='/'>Home</Link>
        <Link className='hdr-browse' to='browse'>Browse</Link>
    </div>
);

export default Header;