import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CtaLink from '../components/CtaLink/CtaLink';

export default {
    title: 'CtaLink',
    component: CtaLink,
} as Meta;

export const Primary = () => (
    <CtaLink
        className="hover:text-primaryHover"
        label="Hello"
        isVisible
        to="https://google.de"
    />
);
export const Secondary = () => (
    <CtaLink
        className="hover:text-primaryHover"
        label="Hello"
        isVisible
        reversed
        to="https://google.de"
    />
);
export const Button = () => (
    <CtaLink
        className="w-max text-center rounded cursor-pointer select-none text-headline bg-primary fjord-btn hover:text-headline hover:bg-primaryHover"
        label="Button"
        to="https://google.de"
    />
);
export const ButtonWithIcon = () => (
    <CtaLink
        className="w-max text-center rounded cursor-pointer select-none text-headline bg-primary fjord-btn hover:text-headline hover:bg-primaryHover"
        label="Button"
        isVisible
        to="https://google.de"
    />
);
