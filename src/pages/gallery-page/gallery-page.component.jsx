import React from 'react';
import { withRouter } from 'react-router-dom';
import GalleryItem from '../../components/gallery-item/gallery-item.component'
import GALLERY_DATA from './gallery.data';

import './gallery-page.styles.scss';

class GalleryPage extends React.Component {
    constructor(){
        super();
        this.state = {
            gallery: GALLERY_DATA
        }
    };

    render(){
        console.log(this.state.gallery);
        return (
            <div>
                <h2>Gallery</h2>
                <div className='gallery-page'>
                    {this.state.gallery.map(({id, ...otherProps}) => ( 
                        <GalleryItem key={id} {...otherProps} /> 
                    ))}
                </div>
            </div>
        );
    };
};

export default withRouter(GalleryPage);