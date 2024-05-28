import React from 'react';
import { CellButton } from './Button';

export default {
  title: 'Cell Conponents/Button',
  component: CellButton,
  argTypes: {
    primary: {
      control: 'boolean',
      description: 'Types of the button.',
    },
    buttonColor: {
      control: 'select',
      options: ['gray', 'red', 'yellow', 'green', 'blue'],
      description: 'The background colors of the button.',
    },
    content: {
      control: 'text',
      description: 'The text content of the button.',
    },
    iconName: {
      control: 'text',
      description: 'The icon name of react-icons/md. See more details in https://react-icons.github.io/react-icons/.',
    },
  },

  tags: ['autodocs'],
};

const Template = (args) => <CellButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...CellButton.defaultProps,
  primary: true,
  content: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...CellButton.defaultProps,
  content: 'Button',
};

export const HasIcon = Template.bind({});
HasIcon.args = {
  ...CellButton.defaultProps,
  content: 'Copy',
  buttonColor: 'gray',
  iconName: 'MdContentCopy',
};