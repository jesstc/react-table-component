import React from 'react';
import PropTypes from 'prop-types';
import CellComponents from '../cellcomponents/CellComponents';
  
export const BodyCell = ({ cellType = 'CellText', isFixFirstCol = false, isFixLastCol = false, cellProps }) => {
  const Component = CellComponents[cellType]?.component;

  if (!Component) {
    const Text = CellComponents['CellText'].component;
    return <td> <Text content="Invalid cellType"/> </td>;
  }

  // fix column class
  let fixClass = '';
  isFixFirstCol && (fixClass += 'fixed-first-col');
  isFixLastCol && (fixClass += 'fixed-last-col');
  
  return <td className={fixClass}> <Component {...cellProps} /> </td>;
};

BodyCell.propTypes = {
  cellType: PropTypes.oneOf(Object.keys(CellComponents)),
  isFixFirstCol: PropTypes.bool,
  isFixLastCol: PropTypes.bool,
  cellProps: PropTypes.object,
};
