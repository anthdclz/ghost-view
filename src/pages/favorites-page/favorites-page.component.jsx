import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GalleryItem from '../../components/gallery-item/gallery-item.component'
import { selectFavItems, selectFavItemsCount } from '../../redux/favorites/favorites.selectors';
import imgGallery from '../../assets/banners/ghost-view-gallery.gif';
import WallItem from '../../components/wall-item/wall-item.component';

import './favorites-page.styles.scss';

const FavoritesPage = ({ currentUser, list, favsCount }) => {
    let exhibits = [];
    if(favsCount < 1){
        exhibits = [
            {
                id: 1,
                title: 'Gallery',
                imgUrl: imgGallery,
                linkUrl: 'gallery'
            }
        ];    
    }
    return (
        <div className="page">
            <h2>Favorites</h2>
            <div className='favorites-page'>
                {
                    favsCount > 0 ?
                        list.map((item) => (
                            <GalleryItem key={item.id} item={item} />
                        )
                    ):(
                        <div className='wall'>
                            <div className='wall-para'>
                                {
                                    currentUser ? null : (
                                        <Link to='sign-in'>Sign in</Link>
                                    )
                                }
                                {
                                   currentUser ? 'Check out the Gallery to add your Favorites.': ' and check out the Gallery to add your Favorites.'
                                }
                            </div>
                            {
                                exhibits.map(({id, ...otherProps}) => (
                                    <WallItem key={id} {...otherProps} />
                                ))
                            }

                        </div>
                    )
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    list: selectFavItems(state),
    favsCount: selectFavItemsCount(state)
});

export default connect(mapStateToProps)(withRouter(FavoritesPage));