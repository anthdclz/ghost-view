import React from 'react';
import LazyLoad from 'react-lazyload';

import './comic-item.styles.scss';

const ComicItem = ({comic: {thumbnail}}) => {
        const imagePath = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;
        return (
            <LazyLoad height={268} once offset={100}>
            <div 
                className='comic-item'
                style={{
                    backgroundImage: `url(${imagePath})`
                }} 
            >
            </div>
            </LazyLoad>        
        );
}
export default ComicItem;