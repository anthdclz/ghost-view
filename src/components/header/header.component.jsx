import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='hdr-home' to='/'>HOME</Link>
        <div>
        <Link className='hdr-option' to='browse'>BROWSE</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {
            currentUser ? (
                <span className='hdr-option' onClick={() => auth.signOut()}>SIGN OUT</span>
            ):(
                <Link className='hdr-option' to='sign-in'>SIGN IN</Link>
            )
        }
        </div>
    </div>
);

export default Header;