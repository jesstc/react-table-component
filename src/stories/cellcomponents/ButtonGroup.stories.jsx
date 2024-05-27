import React from 'react';
import { CellButtonGroup } from './ButtonGroup';

export default {
  title: 'Cell Conponents/ButtonGroup',
  component: CellButtonGroup,
  argTypes: {
    btns: {
      control: 'object',
      description: 'Pass `BasicButton` parameters to create button group. The parameters include `primary` (boolean), `content` (text), `buttonColor` (select options), and `iconName` (react-icons). See more information in the `Button` story page.',
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <CellButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...CellButtonGroup.defaultProps,
};

export const FunctionButtonGroup = Template.bind({});
FunctionButtonGroup.args = {
  btns: [
    {content: 'Edit', buttonColor: 'green', iconName: 'MdEdit',},
    {content: 'Delete', buttonColor: 'red', iconName: 'MdDelete',},
  ],
};
