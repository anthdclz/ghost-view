import React from 'react';
import './details-item.styles.scss';

const DetailItem = ({stat, val}) => (
    <div className='detail-item'>
        <div className='stat'>{stat}</div>
        <div className='val'>{val}</div>
    </div>
);

export default DetailItem;