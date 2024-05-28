import React from 'react';
import { CellToggleSwitch } from './ToggleSwitch';

export default {
  title: 'Cell Conponents/ToggleSwitch',
  component: CellToggleSwitch,
  argTypes: {
    id: {
      control: 'text',
      description: 'The id of toggle switch.',
    },
    isSwitchChecked: {
      control: 'boolean',
      description: 'The initial status of toggle switch.',
    },
    isSwitchReadonly: {
      control: 'boolean',
      description: 'Set up if the status of the toggle switch can be changed.',
    },
    isSwitchDisabled: {
      control: 'boolean',
      description: 'Set up if the toggle switch is disabled.',
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <CellToggleSwitch {...args} />;

export const Default = Template.bind({});

export const CheckedToggleSwitch = Template.bind({});
CheckedToggleSwitch.args = {
  isSwitchChecked: true,
};

export const CheckedReadOnlyToggleSwitch = Template.bind({});
CheckedReadOnlyToggleSwitch.args = {
  isSwitchChecked: true,
  isSwitchReadonly: true,
};

export const DisabledToggleSwitch = Template.bind({});
DisabledToggleSwitch.args = {
  isSwitchChecked: true,
  isSwitchDisabled: true,
};

