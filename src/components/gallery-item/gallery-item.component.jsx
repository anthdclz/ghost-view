import React from 'react';
import { withRouter } from 'react-router-dom';

import './gallery-item.styles.scss';

const GalleryItem = ({color, title, history, match}) => (
            <div className="gallery-item" style={{backgroundColor: color}} onClick={ () => history.push(`${match.url}/summary/${title.toLowerCase()}`)}>
                <div>{title}</div>
            </div>
        );

export default withRouter(GalleryItem);