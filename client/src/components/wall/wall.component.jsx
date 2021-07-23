import React from 'react';
import WallItem from '../../components/wall-item/wall-item.component';
import imgGallery from '../../assets/banners/ghost-view-gallery.gif';
import imgWaveOrange from '../../assets/gallery-items/new_wave_64.10551032303746.svg';
import imgWaveBlue from '../../assets/gallery-items/new_wave_447.14939221550185.svg';
import imgFavs from '../../assets/banners/ghost-view-favs.gif';

import './wall.styles.scss';

class Wall extends React.Component {
    constructor(){
        super();

        this.state = {
            exhibits: [
                {
                    id: 1,
                    title: 'gallery',
                    imgUrl: imgGallery,
                    linkUrl: 'gallery',
                    fltr: true,
                    brgt: true
                  },
                  {
                    id: 2,
                    title: 'comics',
                    imgUrl: imgWaveOrange,
                    linkUrl: 'comics',
                    fltr: false,
                    brgt: false
                  },
                  {
                    id: 3,
                    title: 'browse',
                    imgUrl: imgWaveBlue,
                    linkUrl: 'browse',
                    fltr: false,
                    brgt: false
                  },
                  {
                    id: 4,
                    title: 'favorites',
                    imgUrl: imgFavs,
                    linkUrl: 'favorites',
                    fltr: true,
                    brgt: false
                  }
            ]
        }
   }

    
    render(){
        return(
            <div className='wall'>
                {
                    this.state.exhibits.map(({id, ...otherProps}) => (
                        <WallItem key={id} {...otherProps} />
                    ))
                }
            </div>    
        );
    }
};

export default Wall;