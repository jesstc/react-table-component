import React from 'react';
import { CellText } from '../cellcomponents/Text';
import PropTypes from 'prop-types';

export const HeaderCell = ({ CellTextProps }) => {
  return (
    <th><CellText isHeader {...CellTextProps}/></th>
  );
};

HeaderCell.propTypes = {
  CellTextProps: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};
