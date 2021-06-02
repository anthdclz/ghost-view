import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import HomeIconIcon from '../home-icon/home-icon.component';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='hdr-home' to='/'>
            <HomeIconIcon />
        </Link>
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

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);