import React from 'react';
import { Badge } from '@chakra-ui/react'

export const BasicBadge = ({ badgeColor, content }) => {
  return (
    <Badge
      variant='subtle' 
      colorScheme={badgeColor}
    >
      {content}
    </Badge>
  );
};

BasicBadge.defaultProps = {
  content: 'status',
  badgeColor: 'gray',
};
  
