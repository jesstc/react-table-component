import React from 'react';
import { CellText } from '../cellcomponents/Text';
import PropTypes from 'prop-types';

export const HeaderCell = ({ cellTextProps }) => {
  return (
    <th><CellText isHeader {...cellTextProps}/></th>
  );
};

HeaderCell.propTypes = {
  cellTextProps: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};
