import React from 'react';
import { Button } from '@chakra-ui/react'
import * as MdIcons from 'react-icons/md';

export const BasicButton = ({ primary, buttonColor, content, iconName, ...props }) => {
  const mode = primary ? 'solid' : 'outline';
  const Icon = MdIcons[iconName] || MdIcons.MdHelpOutline;
  return (
    <Button size='sm' 
      variant={mode} 
      colorScheme={buttonColor}
      leftIcon={iconName.trim().length !== 0 && <Icon />}
      {...props}
    >
      {content}
    </Button>
  );
};

BasicButton.defaultProps = {
  content: 'Button',
  buttonColor: 'blue',
  iconName: '',
};
