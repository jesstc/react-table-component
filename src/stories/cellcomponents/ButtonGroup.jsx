import React from 'react';
import PropTypes from 'prop-types';
import { CellButton } from './Button';
import { ButtonGroup } from '@chakra-ui/react';

export const CellButtonGroup = ({ btns, direction = 'row' }) => {
  const groupFlexStyle = {
    display: 'flex',
    flexDirection: direction,
    gap: '.5em',
  };

  return (
    <>
      <ButtonGroup style={groupFlexStyle} spacing={direction == 'column' && `0`}>
        {btns.map((btnProps, index) => (
          <CellButton key={index} {...btnProps} />
        ))}
      </ButtonGroup>
    </>
  );
};

CellButtonGroup.propTypes = {
  btns: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      buttonColor: PropTypes.oneOf(['gray', 'red', 'yellow', 'green', 'blue']),
      iconName: PropTypes.string,
      primary: PropTypes.bool,
    })
  ).isRequired,
  direction: PropTypes.oneOf(['row', 'column']),
};
