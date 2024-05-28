import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react'
import * as MdIcons from 'react-icons/md';

export const CellButton = ({ primary, buttonColor, content, iconName, btnNum, ...props }) => {
  const mode = primary ? 'solid' : 'outline';
  const Icon = MdIcons[iconName] || MdIcons.MdHelpOutline;

  return (
    <Button 
      size='sm' 
      variant={mode} 
      colorScheme={buttonColor}
      leftIcon={iconName.trim().length !== 0 && <Icon />}
      {...props}
    >
      {content}
    </Button>
  );
};

CellButton.propTypes = {
  content: PropTypes.string.isRequired,
  buttonColor: PropTypes.oneOf(['gray', 'red', 'yellow', 'green', 'blue']),
  iconName: PropTypes.string,
  primary: PropTypes.bool,
};

CellButton.defaultProps = {
  content: '',
  buttonColor: 'blue',
  iconName: '',
  primary: false,
};
