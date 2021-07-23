import React from 'react';
import imgWaveOrange from '../../assets/gallery-items/new_wave_64.10551032303746.svg';

import './news-flair.styles.scss';

const NewsFlair = () => (
    <div className='news-flair'>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imgWaveOrange})`
            }} 
        />
    </div>
);

export default NewsFlair;