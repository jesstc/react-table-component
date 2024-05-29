import React from 'react';
import { HeaderCell } from './HeaderCell';

export default {
  title: 'Table Conponents/HeaderCell',
  component: HeaderCell,
  parameters: {
      docs: {
      description: {
        component: '表格首欄的一個 cell，使用 `CellText` 作為子元件。`HeaderCell` 底色會變成淺灰色，字體為粗體、大小為 16px，並且可支援 Sorting 的功能。\n',
      },
    },
  },
  argTypes: {
    isFixFirstCol: {
      control: 'boolean',
      description: 'Check if this cell is fixed in the first column.',
    },
    isFixLastCol: {
      control: 'boolean',
      description: 'Check if this cell is fixed in the last column.',
    },
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

export const WithSortingIcon = Template.bind({});
WithSortingIcon.args = {
  cellTextProps: {
    content: '商品名稱',
    isSorting: true,
  },
};
