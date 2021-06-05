import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { addFav } from '../../redux/favorites/favorites.actions'
import flairBlock from '../flair/flair.utils';
import StarIconIcon from '../star-icon/star-icon.component';

import './gallery-item.styles.scss';

const GalleryItem = ({ item, history, match, addFav }) => {
    const { title, titleColor, coverBkgd, flair, num, vol } = item;

    const titleBlock = (title) => {
        switch (title) {
            case 'The Dark Roast':
                return 'the-dark-roast';
            case 'Arabica Nights':
                return 'arabica-nights';
            case 'Coffeehead':
                return 'coffeehead';
            case 'The Ground Lore':
                return 'the-ground-lore';
            case 'Fresh Pot':
                return 'fresh-pot';
            case 'The Shelter Forsaken':
                return 'shelter-forsaken';
            case 'Wicked Grim':
                return 'wicked-grim';
            case 'Sullen Mist':
                return 'sullen-mist';
            default:
                return '';
        }
    }
    const number = num > 0 ? num : '';
    const volume = vol ? vol : '';
    return (
        <div 
            className={`gallery-item ${coverBkgd}`} 
            onClick={() => history.push(`${match.url}/summary/${title.toLowerCase()}`)}
        >
            <div
                className={`title ${titleBlock(title)}`}
                style={{ color: titleColor }}
            >{title}</div>
            {flairBlock(flair)}
            <div className='volume-block'>
                <div className='number' style={{ color: titleColor }}>{number}</div>
                <div className='volume'>{volume}</div>
            </div>
            {/* <div className='fav-tag'>
                <StarIconIcon onClick={()=> addFav(item)} />
            </div> */}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addFav: fav => dispatch(addFav(fav))
});

export default connect(null, mapDispatchToProps)(withRouter(GalleryItem));