import React from 'react';
import { Table } from './Table';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    columnNum: {
      control: { type: 'number', min: 3, max:40, step: 1 },
      description: 'The number of table columns.',
    },
    fixedPosition: {
      control: 'inline-radio',
      options: ['row', 'column'],
      description: 'Choose if you want to fix the first or last cell bySupports fixed the first or last cell. Based on this parameter, you can choose to fix the cell by row or by column.',
    },
    fixedFirstCell: {
      control: 'boolean',
      description: 'To determine whether the first cell is fixed.',
    },
    fixedLastCell: {
      control: 'boolean',
      description: 'To determine whether the last cell is fixed.',
    },
    headLabels: {
      control: 'object',
      description: 'The content and whether it can sorting or not of each column in the first row. The length of `headLabels` should be equal to the `columnNum`.',
    },
    cellTypes: {
      control: 'object',
      description: 'Types of each column (e.g., CellBadge, CellButton, CellButtonGroup, CellDropdown, CellImage, CellRadios, CellText, and CellToggleSwitch). The length of `cellTypes` should be equal to the `columnNum`.',
    },
    data: {
      control: 'object',
      description: 'The data of each row.',
    }
  },
  tags: ['autodocs'],
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};
