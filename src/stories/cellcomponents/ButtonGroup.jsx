import React from 'react';
import PropTypes from 'prop-types';
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

CellButtonGroup.propTypes = {
  btns: PropTypes.shape({
    content: PropTypes.string.isRequired,
    buttonColor: PropTypes.oneOf(['gray', 'red', 'yellow', 'green', 'blue']),
    iconName: PropTypes.string,
    primary: PropTypes.bool,
  }).isRequired,
};

CellButtonGroup.defaultProps = {
  btns: [
    {primary: false, content: '', buttonColor: 'gray', iconName: ''},
    {primary: false, content: '', buttonColor: 'gray', iconName: ''},
  ],
};