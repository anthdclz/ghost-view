import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
                                        <span className='disabled'>Sign in</span>
                                    )
                                }
                                {
                                   currentUser ? 'Check out the Gallery to add your Favorites.': ' and check out the Gallery to add your Favorites.'
                                }
                            </div>
                            <div className='wall-para'>Currently disabled. <Link to='/'>Go back</Link></div>
                            {/* {
                                exhibits.map(({id, ...otherProps}) => (
                                    <WallItem key={id} {...otherProps} />
                                ))
                            } */}

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

export default connect(mapStateToProps)(FavoritesPage);