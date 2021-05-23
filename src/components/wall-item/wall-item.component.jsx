import React from 'react';

import './wall-item.styles.scss';

const WallItem = ({title}) => (
    <div className='wall-item'>
        <div className='content'>
            <div className='title'>
            {title}
            </div>
        </div>
    </div>
);

export default WallItem;