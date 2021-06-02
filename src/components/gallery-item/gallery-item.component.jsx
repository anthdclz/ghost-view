import React from 'react';
import { withRouter } from 'react-router-dom';

import { BatIcon, BroomIcon, CandleIcon, CauldronIcon, GhostIcon, PumpkinIcon, WebIcon } from '../flair/flair.component';

import './gallery-item.styles.scss';

const GalleryItem = ({ id, color, title, titleColor, coverBkgd, font, flair, history, match }) => {
    const flairBlock = (flair) => {
        switch (flair) {
            case 'BatIcon':
                return <BatIcon />;
            case 'CandleIcon':
                return <CandleIcon />;
            case 'CauldronIcon':
                return <CauldronIcon />;
            case 'GhostIcon':
                return <GhostIcon />;
            case 'PumpkinIcon':
                return <PumpkinIcon />;
            case 'WebIcon':
                return <WebIcon />;
            default:
                return <BroomIcon />;
        }
    }
    const titleBlock = (title) => {
        switch (title) {
            case 'The Dark Roast':
                return 'the-dark-roast';
            case 'Arabica Nights':
                return 'arabica-nights';
            case 'Coffeehead':
                return 'coffeehead';
            case 'The Ground Lore':
                return 'the-ground-lore';
            case 'Fresh Pot':
                return 'fresh-pot';
            case 'The Shelter Forsaken':
                return 'shelter-forsaken';
            case 'Wicked Grim':
                return 'wicked-grim';
            case 'Sullen Mist':
                return 'sullen-mist';
            default:
                return '';
        }
    }
    return (
        <div className={`gallery-item ${coverBkgd}`} onClick={() => history.push(`${match.url}/summary/${title.toLowerCase()}`)}>
            <div
                className={titleBlock(title)}
                style={{ color: titleColor }}
            >{title}</div>
            {flairBlock(flair)}
        </div>
    );
};

export default withRouter(GalleryItem);