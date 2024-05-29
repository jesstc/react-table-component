import React from 'react';
import { CellText } from '../cellcomponents/Text';
import PropTypes from 'prop-types';

export const HeaderCell = ({ isFixFirstCol = false, isFixLastCol = false, cellTextProps }) => {
  // fix column class
  let fixClass = '';
  isFixFirstCol && (fixClass += 'fixed-first-col');
  isFixLastCol && (fixClass += 'fixed-last-col');
  
  return (
    <th className={fixClass}><CellText isHeader {...cellTextProps}/></th>
  );
};

HeaderCell.propTypes = {
  isFixFirstCol: PropTypes.bool,
  isFixLastCol: PropTypes.bool,
  cellTextProps: PropTypes.shape({
    content: PropTypes.string.isRequired,
    isSorting: PropTypes.bool,
  }).isRequired,
};
