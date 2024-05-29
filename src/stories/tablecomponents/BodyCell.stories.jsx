import React, { useEffect } from 'react';
import { useArgs } from '@storybook/client-api';
import { BodyCell } from './BodyCell';
import CellComponents from '../cellcomponents/CellComponents';

// defaultCellProps
const defaultCellProps = {
  CellBadge: { 
    content: 'Badge',
    badgeColor: 'gray',
  },
  CellButton: {
    content: 'Button',
    primary: false,
    buttonColor: 'blue',
    iconName: '',
  },
  CellButtonGroup: {
    btns: [
      {content: 'Button 1',
      primary: true,
      buttonColor: 'blue',
      iconName: ''},
      {content: 'Button 2',
      primary: false,
      buttonColor: 'blue',
      iconName: ''},
    ],
    direction: 'row',
  },
  CellDropdown: {
    placeholderText: 'Select Option', 
    defaultValue: 'val1',
    dropdownContents: [
      {value: 'val1', content: 'value 1'},
      {value: 'val2', content: 'value 2'},
      {value: 'val3', content: 'value 3'},
    ],
    dropdownName: '',
  },
  CellImage: {
    imgSrc: 'data:image/png;base64,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', 
    altText: '91APP Logo',
    imgSize: 100,
    borderRadius: 0,
  },
  CellRadios: {
    radioName: '', 
    defaultValue: 'val1',
    radioContents:[
      {value: 'val1', content: 'value 1'},
      {value: 'val2', content: 'value 2'},
      {value: 'val3', content: 'value 3'},
    ],
  },
  CellText: {
    content: 'text', 
    hyperLink: '',
    longTextLines: 0,
    isHeader: false,
  },
  CellToggleSwitch: {
    id: '', 
    isSwitchChecked: false,
    isSwitchReadonly: false,
    isSwitchDisabled: false,
  },
};

export default {
  title: 'Table Conponents/BodyCell',
  component: BodyCell,
  argTypes: {
    cellType: {
      control: 'select',
      options: Object.keys(CellComponents),
      description: 'Types of cell components.',
    },
    cellProps: {
      control: 'object',
      description: 'The values of selected `cellType` component.',
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => {
  const [{ cellType }, updateArgs] = useArgs();

  // when cellType change, then update cellProps value in control panel
  React.useEffect(() => {
    defaultCellProps[cellType] && updateArgs({ cellProps: defaultCellProps[cellType] });
  }, [cellType, updateArgs]);

  return <BodyCell {...args} />;
}

export const CellText = Template.bind({});
CellText.args = {
  cellType: 'CellText',
  cellProps: defaultCellProps['CellText'],
};

export const CellBadge = Template.bind({});
CellBadge.args = {
  cellType: 'CellBadge',
  cellProps: defaultCellProps['CellBadge'],
};

export const CellButton = Template.bind({});
CellButton.args = {
  cellType: 'CellButton',
  cellProps: defaultCellProps['CellButton'],
};

export const CellButtonGroup = Template.bind({});
CellButtonGroup.args = {
  cellType: 'CellButtonGroup',
  cellProps: defaultCellProps['CellButtonGroup'],
};

export const CellDropdown = Template.bind({});
CellDropdown.args = {
  cellType: 'CellDropdown',
  cellProps: defaultCellProps['CellDropdown'],
};

export const CellImage = Template.bind({});
CellImage.args = {
  cellType: 'CellImage',
  cellProps: defaultCellProps['CellImage'],
};
export const CellRadios = Template.bind({});
CellRadios.args = {
  cellType: 'CellRadios',
  cellProps: defaultCellProps['CellRadios'],
};
export const CellToggleSwitch = Template.bind({});
CellToggleSwitch.args = {
  cellType: 'CellToggleSwitch',
  cellProps: defaultCellProps['CellToggleSwitch'],
};