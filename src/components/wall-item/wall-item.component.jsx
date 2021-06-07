import React from 'react';
import { withRouter } from 'react-router-dom';

import './wall-item.styles.scss';

const WallItem = ({title, linkUrl, imgUrl, history}) => (
    <div className='wall-item' onClick={ () => history.push(`${linkUrl}`)}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imgUrl})`
            }} 
        />
        <div className='content'>
            <div className='title'>
            {title}
            </div>
        </div>
    </div>
);

export default withRouter(WallItem);