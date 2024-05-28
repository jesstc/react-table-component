import React from 'react';
import { HeaderCell } from './HeaderCell';

export default {
  title: 'Table Conponents/HeaderCell',
  component: HeaderCell,
  argTypes: {
    CellTextProps: {
      content: {
        control: 'text',
        description: 'Text content of table header',
      },
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <HeaderCell {...args} />;

export const Default = Template.bind({});
Default.args = {
  CellTextProps: {
    content: '商品名稱',
  },
  ...HeaderCell.defaultProps,
};
