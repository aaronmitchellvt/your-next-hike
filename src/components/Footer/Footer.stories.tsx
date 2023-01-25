import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'components/Footer',
  component: Footer,
};

const Template = () => (
  <Footer
    phone="832-540-8313"
    email="test@email.com"
  />
);
export const Default = Template.bind({});

