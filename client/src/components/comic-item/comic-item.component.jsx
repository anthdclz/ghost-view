import React from 'react';
import LazyLoad from 'react-lazyload';

import './comic-item.styles.scss';

const ComicItem = ({comic: {images, urls}}) => {
        const imagePath = `${images[0].path}/${urls[0].type}.${images[0].extension}`;
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