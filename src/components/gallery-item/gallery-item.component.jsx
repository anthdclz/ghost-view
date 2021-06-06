import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { addFav } from '../../redux/favorites/favorites.actions'
import flairBlock from '../flair/flair.utils';
// import { StarSolidIcon } from '../home-icon/home-icon.component';

import './gallery-item.styles.scss';

const GalleryItem = ({ item, history, match, addFav }) => {
    const { id, title, titleColor, coverBkgd, flair, num, vol } = item;
    const number = num > 0 ? num : '';
    const volume = vol ? vol : '';

    return (
        <div 
            className={`gallery-item ${coverBkgd}`} 
            onClick={() => history.push(`${match.url}/summary/${title.toLowerCase()}?id=${id}`)}
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
            {/* <div className='fav-tag'>
                <StarSolidIcon onClick={()=> addFav(item)} />
            </div> */}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addFav: fav => dispatch(addFav(fav))
});

export default connect(null, mapDispatchToProps)(withRouter(GalleryItem));