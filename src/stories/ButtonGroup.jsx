import React from 'react';
import { CellButton } from './Button';
import { ButtonGroup } from '@chakra-ui/react';

export const CellButtonGroup = ({ btns }) => {
  return (
    <ButtonGroup>
      {btns.map((btnProps, index) => (
        <CellButton key={index} {...btnProps} />
      ))}
    </ButtonGroup>
  );
};

CellButtonGroup.defaultProps = {
  btns: [
    {primary: true, content: 'Button 1', buttonColor: 'blue', iconName: ''},
    {primary: false, content: 'Button 2', buttonColor: 'blue', iconName: ''},
  ],
};