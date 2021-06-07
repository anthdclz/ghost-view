import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { HomeIcon, BackIcon } from '../home-icon/home-icon.component';
import { clearAllFavs } from '../../redux/favorites/favorites.actions';

import './header.styles.scss';

class Header extends React.Component {
    handleSignOut = () => {
        this.props.clearAllFavs();
        auth.signOut();
    }
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
                            <div className='hdr-back' onClick={() => history.goBack()}>
                                <BackIcon />
                            </div>
                        )
                    }
                </div>
                        {
                        isItemPage && latestItem ? (
                            <div className='title'>{latestItem.title} {latestItem.num > 0 ? latestItem.num : ''}</div>

                        ) : null
                    }
                <div className='hdr-right'>
                    {
                        !isItemPage ? (
                            <Link className='hdr-option' to='favorites'>FAVS</Link>
                        ) : null
                    }                
                    {
                        !isItemPage && currentUser ? (
                            <span className='hdr-option' onClick={() => this.handleSignOut()}>SIGN OUT</span>
                        ) : !isItemPage ? (
                            <Link className='hdr-option' to='sign-in'>SIGN IN</Link>
                        ) : null
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

const mapDispatchToProps = dispatch => ({
    clearAllFavs: () => dispatch(clearAllFavs())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));