// src/stories/Button.stories.tsx
import React from 'react';
import { ToggleSwitch } from './ToggleSwitch';

export default {
  title: 'Cell Conponents/ToggleSwitch',
  component: ToggleSwitch,
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

const Template = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...ToggleSwitch.defaultProps,
};

export const CheckedToggleSwitch = Template.bind({});
CheckedToggleSwitch.args = {
  ...ToggleSwitch.defaultProps,
  isSwitchChecked: true,
};

export const CheckedReadOnlyToggleSwitch = Template.bind({});
CheckedReadOnlyToggleSwitch.args = {
  ...ToggleSwitch.defaultProps,
  isSwitchChecked: true,
  isSwitchReadonly: true,
};

export const DisabledToggleSwitch = Template.bind({});
DisabledToggleSwitch.args = {
  ...ToggleSwitch.defaultProps,
  isSwitchChecked: true,
  isSwitchDisabled: true,
};

