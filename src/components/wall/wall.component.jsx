import React from 'react';
import WallItem from '../../components/wall-item/wall-item.component';
import imgGallery from '../../assets/banners/ghost-view-gallery.gif';
import imgWaveBlue from '../../assets/gallery-items/new_wave_447.14939221550185.svg';
import imgWaveOrange from '../../assets/gallery-items/new_wave_64.10551032303746.svg';
import imgFavs from '../../assets/banners/ghost-view-favs.gif';

import './wall.styles.scss';

class Wall extends React.Component {
    constructor(){
        super();

        this.state = {
            exhibits: [
                {
                    id: 1,
                    title: 'Gallery',
                    imgUrl: imgGallery,
                    linkUrl: 'gallery',
                    fltr: true,
                    brgt: true
                  },
                  {
                    id: 2,
                    title: 'Charted - Market Simulator',
                    imgUrl: imgWaveBlue,
                    linkUrl: 'https://charted-2e73b.web.app',
                    fltr: false,
                    brgt: false
                  },
                  {
                    id: 3,
                    title: 'Pouch Fighter - Turn-based Game',
                    imgUrl: imgWaveOrange,
                    linkUrl: 'https://pocket-2dc44.web.app/',
                    fltr: false,
                    brgt: false
                  },
                  {
                    id: 4,
                    title: 'Browse',
                    imgUrl: imgWaveBlue,
                    linkUrl: 'browse',
                    fltr: false,
                    brgt: false
                  },
                  {
                    id: 5,
                    title: 'Favorites',
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