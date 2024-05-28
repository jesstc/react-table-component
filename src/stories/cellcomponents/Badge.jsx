import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from '@chakra-ui/react'

export const CellBadge = ({ badgeColor, content }) => {
  return (
    <Badge
      variant='subtle' 
      colorScheme={badgeColor}
    >
      {content}
    </Badge>
  );
};

CellBadge.propTypes = {
  content: PropTypes.string.isRequired,
  badgeColor: PropTypes.oneOf(['gray', 'red', 'yellow', 'green', 'blue']),
};

CellBadge.defaultProps = {
  content: '',
  badgeColor: 'gray',
};
  
