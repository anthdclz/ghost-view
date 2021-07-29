import React from 'react';
import LazyLoad from 'react-lazyload';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleModal } from '../../redux/app/app.actions';

import './comic-item.styles.scss';

const ComicItem = ({comic: {thumbnail}, toggleModal}) => {
        const imagePath = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;
        return (
            <LazyLoad height={268} once offset={100}>
            <div 
                className='comic-item'
                style={{
                    backgroundImage: `url(${imagePath})`
                }}
                onClick={toggleModal}
            >
            </div>
            </LazyLoad>        
        );
}

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal())
});  
export default connect(null, mapDispatchToProps)(ComicItem);
