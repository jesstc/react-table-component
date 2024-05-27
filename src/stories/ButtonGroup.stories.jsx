// src/stories/Button.stories.tsx
import React from 'react';
import { BasicButtonGroup } from './ButtonGroup';

export default {
  title: 'Cell Conponents/ButtonGroup',
  component: BasicButtonGroup,
  argTypes: {
    btns: {
      control: 'object',
      description: 'Pass `BasicButton` parameters to create button group. The parameters include `primary` (boolean), `content` (text), `buttonColor` (select options), and `iconName` (react-icons). See more information in the `Button` story page.',
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <BasicButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...BasicButtonGroup.defaultProps,
};

export const FunctionButtonGroup = Template.bind({});
FunctionButtonGroup.args = {
  btns: [
    {content: 'Edit', buttonColor: 'green', iconName: 'MdEdit',},
    {content: 'Delete', buttonColor: 'red', iconName: 'MdDelete',},
  ],
};
