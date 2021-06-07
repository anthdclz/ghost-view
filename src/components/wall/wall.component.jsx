import React from 'react';
import WallItem from '../../components/wall-item/wall-item.component';
import imgWaveOrange from '../../assets/gallery-items/new_wave_64.10551032303746.svg';
import imgWaveBlue from '../../assets/gallery-items/new_wave_447.14939221550185.svg';
import imgWaveGreen from '../../assets/gallery-items/new_wave_522.7252551408126.svg';

import './wall.styles.scss';

class Wall extends React.Component {
    constructor(){
        super();

        this.state = {
            exhibits: [
                {
                    id: 1,
                    title: 'gallery',
                    imgUrl: imgWaveOrange,
                    linkUrl: 'gallery'
                  },
                  {
                    id: 2,
                    title: 'browse',
                    imgUrl: imgWaveBlue,
                    linkUrl: 'browse'
                  },
                  {
                    id: 3,
                    title: 'favorites',
                    imgUrl: imgWaveGreen,
                    linkUrl: 'favorites'
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