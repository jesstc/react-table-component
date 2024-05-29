import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from '@chakra-ui/react'

export const CellBadge = ({ badgeColor = 'gray', content }) => {
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
  