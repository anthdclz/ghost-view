import React from 'react';
import './comic-item.styles.scss';

const ComicItem = ({comic: {images, urls}}) => {
    const imagePath = `${images[0].path}/${urls[0].type}.${images[0].extension}`;
    return (
        <div 
            className='comic-item'
            style={{
                backgroundImage: `url(${imagePath})`
            }} 
        >
        </div>        
    );
}
export default ComicItem;