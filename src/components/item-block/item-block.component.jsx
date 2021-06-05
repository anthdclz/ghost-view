import React from 'react';
import flairBlock from '../flair/flair.utils';

import './item-block.styles.scss';

const ItemBlock = ({ item }) => {
    const { coverBkgd, flair } = item;

    return (
        <div className={`gallery-item item-block ${coverBkgd}`} >
            <div style={{ height: '10px' }}></div>
            {flairBlock(flair)}
            <div style={{ height: '10px' }}></div>
        </div>
    );
};

export default ItemBlock;