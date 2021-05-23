import React from 'react';
import WallItem from '../../components/wall-item/wall-item.component';

import './wall.styles.scss';

class Wall extends React.Component {
    constructor(){
        super();

        this.state = {
            exhibits: [
                {
                    id: 1,
                    title: 'feature 1',
                    imgUrl: 'img1',
                    linkUrl: 'shop/hats'
                  },
                  {
                    id: 2,
                    title: 'f2',
                    imgUrl: 'png2',
                    linkUrl: 'shop/jackets'
                  },
                  {
                    id: 3,
                    title: 'image 3',
                    imgUrl: 'svg3',
                    linkUrl: 'shop/sneakers'
                  }
            ]
        }
   }

    
    render(){
        return(
            <div className='wall'>
                {
                    this.state.exhibits.map(({id, title, imageUrl, linkUrl}) => (
                        <WallItem key={id} title={title} />
                    ))
                }
            </div>    
        );
    }
};

export default Wall;