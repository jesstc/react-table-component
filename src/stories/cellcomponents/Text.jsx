import React from 'react';
import PropTypes from 'prop-types';
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { Box } from '@chakra-ui/react';

export const CellText = ({ content, hyperLink = '', longTextLines = 0, isHeader = false, isSorting = false }) => {
  const boxStyle = {
    padding: "2px 5px",
    w: '100%',
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
      gap: "5px",
      backgroundColor: '#F8F9FC',
      fontWeight: "bold",
    };

  return (
    <Box sx={{...boxStyle, ...hyperLinkStyle, ...longTextStyle, ...headerStyle}}>
      {hyperLink.trim().length !== 0 ? 
        (<a href={hyperLink} target="_blank" rel="noopener noreferrer">{content}</a>)
        :
        (content)}

      {(isHeader && longTextLines === 0 && isSorting) && <FaSort />}
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
