import React from 'react';
import PropTypes from 'prop-types';
import CellComponents from '../cellcomponents/CellComponents';
  
export const BodyCell = ({ CellType = 'CellText', CellProps }) => {
  const Component = CellComponents[CellType]?.component;

  if (!Component) {
    const Text = CellComponents['CellText'].component;
    return <td> <Text content="Invalid CellType"/> </td>;
  }
  
  return <td> <Component {...CellProps} /> </td>;
};

BodyCell.propTypes = {
  CellType: PropTypes.oneOf(Object.keys(CellComponents)),
  CellProps: PropTypes.object,
};
