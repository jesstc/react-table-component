import React from 'react';
import PropTypes from 'prop-types';
import CellComponents from '../cellcomponents/CellComponents';
  
export const BodyCell = ({ cellType = 'CellText', cellProps }) => {
  const Component = CellComponents[cellType]?.component;

  if (!Component) {
    const Text = CellComponents['CellText'].component;
    return <td> <Text content="Invalid cellType"/> </td>;
  }
  
  return <td> <Component {...cellProps} /> </td>;
};

BodyCell.propTypes = {
  cellType: PropTypes.oneOf(Object.keys(CellComponents)),
  cellProps: PropTypes.object,
};
