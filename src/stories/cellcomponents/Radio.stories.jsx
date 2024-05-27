import React from 'react';
import { CellRadios } from './Radio';

export default {
  title: 'Cell Conponents/Radio',
  component: CellRadios,
  argTypes: {
    radioName: {
      control: 'text',
      description: 'The name of radio group.',
    },
    defaultValue: {
      control: 'text',
      description: 'The default value of radio option.',
    },
    radioContents: {
      control: 'object',
      description: 'The contents of the radio group. This is a two dimension array, with two items in each element. These two items include keys named `value` (the `value` attribute of the radio option) and `content` (the label of the radio option). `value` represents the value of the `value` tag in the radio option.',
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <CellRadios {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...CellRadios.defaultProps,
  defaultValue: 'val1',
  radioContents: [
    {value: 'val1', content: 'Value 1'},
    {value: 'val2', content: 'Value 2'},
    {value: 'val3', content: 'Value 3'},
  ],
};
