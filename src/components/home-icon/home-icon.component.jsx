import React from 'react';
import { ReactComponent as HomeIconSvg } from '../../assets/icons/fi-br-home.svg';
import { ReactComponent as BackIconSvg } from '../../assets/icons/fi-br-angle-left.svg';
import { ReactComponent as StarIconSvg } from '../../assets/icons/star.svg';
import { ReactComponent as StarSolidIconSvg } from '../../assets/icons/star-solid.svg';
import { ReactComponent as UserIconSvg } from '../../assets/icons/user.svg';
import { ReactComponent as CircleNotchIconSvg } from '../../assets/icons/circle-notch.svg';

import './home-icon.styles.scss';

export const HomeIcon = () => (
    <HomeIconSvg />
);

export const BackIcon = () => (
    <BackIconSvg />
);

export const StarIcon = () => (
    <StarIconSvg />
);

export const StarSolidIcon = () => (
    <StarSolidIconSvg />
);

export const UserIcon = () => (
    <UserIconSvg />
);

export const CircleNotchIcon = () => (
    <CircleNotchIconSvg />
);