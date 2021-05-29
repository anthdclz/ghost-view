import React from 'react';
import './tabs.styles.scss';

const TabsComponent = () => (
    <div className='tabs'>
        <div className='tab selected'>Summary</div>
        <div className='tab'>Details</div>
    </div>
);

export default TabsComponent;