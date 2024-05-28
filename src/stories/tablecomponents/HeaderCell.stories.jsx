import React from 'react';
import { HeaderCell } from './HeaderCell';

export default {
  title: 'Table Conponents/HeaderCell',
  component: HeaderCell,
  argTypes: {
    cellTextProps: {
      control: 'object',
      description: 'The aguments in `CellText` component.',
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <HeaderCell {...args} />;

export const Default = Template.bind({});
Default.args = {
  cellTextProps: {
    content: '商品名稱',
  },
};
