import React from 'react';
import { CellRadios } from './Radios';

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
      description: 'A two dimensional array includes values and label texts of the options in the radio group.',
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
