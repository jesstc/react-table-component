import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { Box } from '@chakra-ui/react';

export const CellText = ({ content, hyperLink = '', longTextLines = 0, isHeader = false, isSorting = false }) => {
  // CellText styles
  const boxStyle = {
    w: '100%',
    fontSize: "14px",
  };
  const hyperLinkStyle = hyperLink.trim().length !== 0
    && {
      textDecoration: "underline",
    };
  const longTextStyle = longTextLines !== 0 
    && {
      display: '-webkit-box',
      overflow: 'hidden',
      wordBreak: 'break-word',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: longTextLines,
    };
  const headerStyle = (isHeader && longTextLines === 0)
    && {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "3px",
      fontWeight: "bold",
      fontSize: "16px",
    };

  // sorting icon state change
  const [sortingState, setSortingState] = useState(0);
  const renderSortingIcon = () => {
    switch (sortingState % 3) {
      case 1:
        return <FaSortDown />;
      case 2:
        return <FaSortUp />;
      default:
        return <FaSort />;
    }
  };

  return (
    <Box 
      sx={{...boxStyle, ...hyperLinkStyle, ...longTextStyle, ...headerStyle}}
      onClick={() => setSortingState(sortingState + 1)}
      >
        {hyperLink.trim().length !== 0 ? 
          (<a href={hyperLink} target="_blank" rel="noopener noreferrer">{content}</a>)
          :
          (content)}

        {(isHeader && longTextLines === 0 && isSorting) && renderSortingIcon()}
    </Box>
  );
};

CellText.propTypes = {
  content: PropTypes.string.isRequired, 
  hyperLink: PropTypes.string,
  longTextLines: PropTypes.number,
  isHeader: PropTypes.bool,
  isSorting: PropTypes.bool,
};
