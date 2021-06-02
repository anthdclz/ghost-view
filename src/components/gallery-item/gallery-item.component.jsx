import React from 'react';
import { withRouter } from 'react-router-dom';

import { BatIcon, BroomIcon } from '../flair/flair.component';

import './gallery-item.styles.scss';

const GalleryItem = ({id, color, title, titleColor, coverBkgd, font, flair, history, match}) => {
    const lineHt = font === 'Superion' ? '70px' : '';
    return(
        <div className={`gallery-item ${coverBkgd}`} onClick={ () => history.push(`${match.url}/summary/${title.toLowerCase()}`)}>
        <div
            style={{fontFamily: font, color: titleColor, lineHeight: lineHt}}
        >{title}</div>
        {
            flair === 'BatIcon' ? <BatIcon /> : <BroomIcon />
        }
    </div>
    );
};

export default withRouter(GalleryItem);