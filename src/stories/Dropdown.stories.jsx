// src/stories/Button.stories.tsx
import React from 'react';
import { CellDropdown } from './Dropdown';

export default {
  title: 'Cell Conponents/Dropdown',
  component: CellDropdown,
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
      description: 'The contents of the dropdown menu. This is a two dimension array, with two items in each element. These two items include keys named `value` (the `value` attribute of the menu option) and `content` (the label of the menu option). `value` represents the value of the `value` tag in the dropdown menu option.',
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
  ...CellDropdown.defaultProps,
  defaultValue: '',
  dropdownContents: [
    {value: 'val1', content: 'Value 1'},
    {value: 'val2', content: 'Value 2'},
    {value: 'val3', content: 'Value 3'},
  ],
};

export const DropdownMenuWithDefaultOption = Template.bind({});
DropdownMenuWithDefaultOption.args = {
  ...CellDropdown.defaultProps,
  defaultValue: 'val2',
  dropdownContents: [
    {value: 'val1', content: 'Value 1'},
    {value: 'val2', content: 'Value 2'},
    {value: 'val3', content: 'Value 3'},
  ],
};
