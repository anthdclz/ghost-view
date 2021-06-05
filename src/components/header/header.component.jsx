import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { HomeIcon, BackIcon } from '../home-icon/home-icon.component';

import './header.styles.scss';

class Header extends React.Component {
    render() {
        const { currentUser, latestItem, history } = this.props;
        const isItemPage = history.location.pathname.includes('/gallery/');
        return (
            <div className='header'>
                <div className='hdr-left'>
                    {
                        !isItemPage ? (
                            <Link className='hdr-home' to='/'>
                                <HomeIcon />
                            </Link>
                        ) : (
                            <Link className='hdr-back' to='/gallery'>
                                <BackIcon />
                            </Link>
                        )
                    }
                </div>
                        {
                        isItemPage && latestItem ? (
                            <div className='title f25'>{latestItem.title} {latestItem.num > 0 ? latestItem.num : ''}</div>

                        ) : null
                    }
                <div className='hdr-right'>
                    <Link className='hdr-option' to='browse'>BROWSE</Link>
                    {
                        currentUser ? (
                            <span className='hdr-option' onClick={() => auth.signOut()}>SIGN OUT</span>
                        ) : (
                            <Link className='hdr-option' to='sign-in'>SIGN IN</Link>
                        )
                    }
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    latestItem: state.item.latestItem
});

export default connect(mapStateToProps)(withRouter(Header));