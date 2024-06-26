import React from 'react';
import { CellDropdown } from './Dropdown';

export default {
  title: 'Cell Conponents/Dropdown',
  component: CellDropdown,
  parameters: {
    docs: {
      description: {
        component: '下拉選單。\n',
      },
    },
  },
  argTypes: {
    dropdownName: {
      control: 'text',
      description: 'The name of dropdown menu.',
    },
    defaultValue: {
      control: 'text',
      description: 'The default value of dropdown menu.',
    },
    dropdownContents: {
      control: 'object',
      description: 'A two dimensional array includes values and label texts of the options in the dropdown menu.',
    },
    placeholderText: {
      control: 'text',
      description: 'The placeholder of the dropdown menu.',
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <CellDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  dropdownContents: [
    {value: 'val1', content: 'Value 1'},
    {value: 'val2', content: 'Value 2'},
    {value: 'val3', content: 'Value 3'},
  ],
};

export const DropdownMenuWithDefaultOption = Template.bind({});
DropdownMenuWithDefaultOption.args = {
  dropdownContents: [
    {value: 'val1', content: 'Value 1'},
    {value: 'val2', content: 'Value 2'},
    {value: 'val3', content: 'Value 3'},
  ],
  defaultValue: 'val2',
};
