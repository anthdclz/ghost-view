import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GalleryItem from '../../components/gallery-item/gallery-item.component'
import { selectFavItems, selectFavItemsCount } from '../../redux/favorites/favorites.selectors';
import WallItem from '../../components/wall-item/wall-item.component';
import imgWaveOrange from '../../assets/gallery-items/new_wave_64.10551032303746.svg';

import './favorites-page.styles.scss';

const FavoritesPage = ({ list, favsCount }) => {
    let exhibits = [];
    if(favsCount < 1){
        exhibits = [
            {
                id: 1,
                title: 'gallery',
                imgUrl: imgWaveOrange,
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
                            <div className='wall-para'>Check out the Gallery to add your Favorites.</div>
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
    list: selectFavItems(state),
    favsCount: selectFavItemsCount(state)
});

export default connect(mapStateToProps)(withRouter(FavoritesPage));