import React from 'react';

import './comics-page.styles.scss';

class ComicsPage extends React.Component {
    render(){
        return (
            <div className="page">
                <h2>Comics</h2>
                <div className='comics-page'>
                    {/* {this.state.gallery.map((item) => ( 
                        <GalleryItem key={item.id} item={item} /> 
                    ))} */}
                </div>
            </div>
        );
    }
};

export default ComicsPage;