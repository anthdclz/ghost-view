import React from 'react';
import { withRouter } from 'react-router-dom';

import { BatIcon, CandleIcon, CauldronIcon, GhostIcon, PumpkinIcon, BagIcon, GrinderIcon, HotIcon, KettleIcon, MugIcon, PaperIcon, PotIcon } from '../flair/flair.component';

import './gallery-item.styles.scss';

const GalleryItem = ({ id, title, titleColor, coverBkgd, flair, num, vol, history, match }) => {
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
            case 'BagIcon':
                return <BagIcon />;
            case 'GrinderIcon':
                return <GrinderIcon />;
            case 'HotIcon':
                return <HotIcon />;
            case 'KettleIcon':
                return <KettleIcon />;
            case 'MugIcon':
                return <MugIcon />;
            case 'PaperIcon':
                return <PaperIcon />;
            case 'PotIcon':
                return <PotIcon />;
            default:
                return <BagIcon />;
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
    const number = num > 0 ? num : '';
    const volume = vol ? vol : '';
    return (
        <div className={`gallery-item ${coverBkgd}`} onClick={() => history.push(`${match.url}/summary/${title.toLowerCase()}`)}>
            <div
                className={`title ${titleBlock(title)}`}
                style={{ color: titleColor }}
            >{title}</div>
            {flairBlock(flair)}
            <div className='volume-block'>
                <div className='number' style={{ color: titleColor }}>{number}</div>
                <div className='volume'>{volume}</div>
            </div>
        </div>
    );
};

export default withRouter(GalleryItem);