// src/stories/Button.stories.tsx
import React from 'react';
import { BasicButton } from './Button';

export default {
  title: 'Cell Conponents/Button',
  component: BasicButton,
};

const Template = (args) => <BasicButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  content: 'Button',
  backgroundColor: 'blue',
};

export const Secondary = Template.bind({});

Secondary.args = {
  content: 'Button',
  backgroundColor: 'blue',
};