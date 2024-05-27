import React from 'react';
import { BasicButton } from './Button';
import { ButtonGroup } from '@chakra-ui/react';

export const BasicButtonGroup = ({ btns }) => {
  return (
    <ButtonGroup>
      {btns.map((btnProps, index) => (
        <BasicButton key={index} {...btnProps} />
      ))}
    </ButtonGroup>
  );
};

BasicButtonGroup.defaultProps = {
  btns: [
    {primary: true, content: 'Button 1', buttonColor: 'blue', iconName: ''},
    {primary: false, content: 'Button 2', buttonColor: 'blue', iconName: ''},
  ],
};