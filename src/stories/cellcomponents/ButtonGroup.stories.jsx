import React from 'react';
import { CellButtonGroup } from './ButtonGroup';

export default {
  title: 'Cell Conponents/ButtonGroup',
  component: CellButtonGroup,
  argTypes: {
    btns: {
      control: 'object',
      description: 'Pass `CellButton` parameters to create button group. The parameters include `primary` (boolean), `content` (text), `buttonColor` (select options), and `iconName` (react-icons/md). See more information in the `Button` story page.',
    },
    direction: {
      control: 'inline-radio',
      options: ['row', 'column'],
      description: 'The flex direction of `Button` components.',
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <CellButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  btns: [
    {primary: true, content: 'Button 1', buttonColor: 'blue', iconName: ''},
    {primary: false, content: 'Button 2', buttonColor: 'blue', iconName: ''}
  ],
};

export const FunctionButtonGroup = Template.bind({});
FunctionButtonGroup.args = {
  btns: [
    {content: 'Edit', buttonColor: 'green', iconName: 'MdEdit',},
    {content: 'Delete', buttonColor: 'red', iconName: 'MdDelete',},
  ],
};

export const FlexByColumn = Template.bind({});
FlexByColumn.args = {
  btns: [
    {content: 'Edit', buttonColor: 'green', iconName: 'MdEdit',},
    {content: 'Delete', buttonColor: 'red', iconName: 'MdDelete',},
  ],
  direction: 'column',
};
