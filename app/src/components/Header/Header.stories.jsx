import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';


export default {
    title: 'Example/Header',
    component: Header,
};

const Template = () => <BrowserRouter><Header /></BrowserRouter>;

export const Default = Template.bind({});
