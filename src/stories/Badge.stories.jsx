// src/stories/Button.stories.tsx
import React from 'react';
import { BasicBadge } from './Badge';

export default {
  title: 'Cell Conponents/Badge',
  component: BasicBadge,
  argTypes: {
    content: {
      control: 'text',
      description: 'The text content of the badge. All characters will transform to upper case if the string is not Mandarin.',
    },
    badgeColor: {
      control: 'select',
      options: ['gray', 'red', 'yellow', 'green', 'blue'],
      description: 'The background colors of the badge.',
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <BasicBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...BasicBadge.defaultProps,
  content: 'status',
};

export const Pending = Template.bind({});
Pending.args = {
  content: 'pending',
  badgeColor: 'yellow',
};

export const Ongoing = Template.bind({});
Ongoing.args = {
  content: 'ongoing',
  badgeColor: 'green',
};