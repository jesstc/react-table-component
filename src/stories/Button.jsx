import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { Button, ButtonGroup } from '@chakra-ui/react'

export const BasicButton = ({ primary, backgroundColor, content, ...props }) => {
  const mode = primary ? 'solid' : 'outline';
  return (
    <Button variant={mode} colorScheme={backgroundColor} size='sm' {...props}>
      {content}
    </Button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Button.defaultProps = {
  primary: false,
  // backgroundColor: 'blue',
};
