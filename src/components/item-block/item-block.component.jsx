import React from 'react';
import { connect } from 'react-redux';

import { addFav } from '../../redux/favorites/favorites.actions'
import flairBlock from '../flair/flair.utils';
import { StarIcon, StarSolidIcon } from '../home-icon/home-icon.component';

import './item-block.styles.scss';

const ItemBlock = ({ item, list, addFav }) => {
    const { coverBkgd, flair } = item;
    const alreadyFaved = list.find(fav => fav.id === item.id);
    const favComponent = alreadyFaved ? <StarSolidIcon /> : <StarIcon />;

    return (
        <div className={`gallery-item item-block ${coverBkgd}`} >
            <div className='fav-tag' onClick={()=> addFav(item)}>
                {favComponent}
            </div>
            <div style={{ height: '10px' }}></div>
            {flairBlock(flair)}
            <div style={{ height: '10px' }}></div>
        </div>
    );
};

const mapStateToProps = ({favorites}) => ({
    list: favorites.list
});

const mapDispatchToProps = dispatch => ({
    addFav: fav => dispatch(addFav(fav))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemBlock);