import React from 'react';

import './news-item.styles.scss';

const NewsItemCompoent = ({id, title, text, date, source}) => (
    <div className='news-item' key={id}>
    <div className='title f15 fw600'>{title}</div>
    <div className='text f15 lh20'>{text}</div>
    <div className='f12'>{source}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{date}</div>
</div>
);

export default NewsItemCompoent;