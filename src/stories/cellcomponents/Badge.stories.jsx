import React from 'react';
import { CellBadge } from './Badge';

export default {
  title: 'Cell Conponents/Badge',
  component: CellBadge,
  parameters: {
    docs: {
      description: {
        component: '用於表達狀態的文字塊，如訂單狀態、活動檔期狀態等。\n',
      },
    },
  },
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

const Template = (args) => <CellBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
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