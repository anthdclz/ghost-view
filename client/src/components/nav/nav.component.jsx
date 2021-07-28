import React from 'react';
import { Link } from 'react-router-dom';

import './nav.styles.scss';

const NavComponent = ({isNavVisible}) => {
    const hiddenClass = isNavVisible ? '' : 'nav-hidden';
    return (
        <div className={`nav ${hiddenClass}`}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/comics'>Comics</Link></li>
                <li><Link to='/browse'>Browse</Link></li>
                <li><Link to='/favorites'>Favorites</Link></li>
            </ul>
        </div>
    );
};

export default NavComponent;