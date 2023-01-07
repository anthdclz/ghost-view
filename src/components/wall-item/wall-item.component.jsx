import React from 'react';
import { Link } from 'react-router-dom';

import './wall-item.styles.scss';

const WallItem = ({title, linkUrl, imgUrl, fltr, brgt, history}) => {
    if (linkUrl.startsWith('http')){
        return (
            <div className='wall-item'  onClick={ () => { window.location.href = linkUrl;} }>
                <div
            className={`background-image${fltr ? ' filter-contrast' : ''}${brgt ? ' filter-brightness' : ''}`}
            style={{
                backgroundImage: `url(${imgUrl})`
            }} 
                />
                <div className='content'>
                    <div className='title'>{title}</div>
                </div>
            </div>
        )
    }
    return (
    <Link to={linkUrl}>
            <div className='wall-item'>
                <div
            className={`background-image${fltr ? ' filter-contrast' : ''}${brgt ? ' filter-brightness' : ''}`}
            style={{
                backgroundImage: `url(${imgUrl})`
            }} 
                />
                <div className='content'>
                    <div className='title'>{title}</div>
                </div>
            </div>
    </Link>
    )
};

export default WallItem;