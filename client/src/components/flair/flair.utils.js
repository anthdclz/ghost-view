import { BatIcon, CandleIcon, CauldronIcon, GhostIcon, PumpkinIcon, BagIcon, GrinderIcon, HotIcon, KettleIcon, MugIcon, PaperIcon, PotIcon } from '../flair/flair.component';

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

export default flairBlock;