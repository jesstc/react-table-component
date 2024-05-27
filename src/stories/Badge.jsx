import React from 'react';
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

CellBadge.defaultProps = {
  content: '',
  badgeColor: 'gray',
};
  
