import React from 'react';
import { connect } from 'react-redux';

import { selectFavItems } from '../../redux/favorites/favorites.selectors';
import { addFav } from '../../redux/favorites/favorites.actions'
import flairBlock from '../flair/flair.utils';
import { StarSolidIcon } from '../home-icon/home-icon.component';

import './gallery-item.styles.scss';

const GalleryItem = ({ item, list }) => {
    const { id, title, titleColor, coverBkgd, flair, num, vol } = item;
    const alreadyFaved = list.find(fav => fav.id === item.id);
    const favComponent = alreadyFaved ? (
        <div className='fav-tag'>
                <StarSolidIcon />
        </div>
    ) : '';
    const number = num > 0 ? num : '';
    const volume = vol ? vol : '';

    return (
        <div 
            className={`gallery-item ${coverBkgd}`} 
            // onClick={() => history.push(`/gallery/summary/${title.toLowerCase()}?id=${id}`)}
        >
            <div
                className={`title ${title.replaceAll(' ', '-')}`}
                style={{ color: titleColor }}
            >{title}</div>
            {flairBlock(flair)}
            <div className='volume-block'>
                <div className='number' style={{ color: titleColor }}>{number}</div>
                <div className='volume'>{volume}</div>
            </div>
            {favComponent}
        </div>
    );
};

const mapStateToProps = (state) => ({
    list: selectFavItems(state)
});

const mapDispatchToProps = dispatch => ({
    addFav: fav => dispatch(addFav(fav))
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem);