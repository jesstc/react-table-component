import React from 'react';
import PropTypes from 'prop-types';
import CellComponents from '../cellcomponents/CellComponents';
  
export const BodyCell = ({ CellType = 'CellText', CellProps }) => {
  const Component = CellComponents[CellType]?.component;

  if (!Component) {
    const Text = CellComponents['CellText'].component;
    return <td> <Text content="Invalid CellType"/> </td>;
  }

  // 
  // switch (CellType) {
  //   case 'CellButtonGroup':
  //     const { btns } = CellProps;
  //     CellProps = btns;
  //     break;
  //   case 'CellDropdown':
  //     const { placeholderText, dropdownDefaultValue, dropdownContents, dropdownName } = CellProps;
  //     CellProps = { placeholderText, dropdownDefaultValue, dropdownContents, dropdownName };
  //     break;
  //   case 'CellRadios':
  //     const { radioName, radiosDefaultValue, radioContents } = CellProps;
  //     CellProps = { radioName, radiosDefaultValue, radioContents };
  //     break;
  //   default:
  //     break;
  // }
  // console.log(CellType, CellProps)
  
  
  return <td> <Component {...CellProps} /> </td>;
};

BodyCell.propTypes = {
  CellType: PropTypes.oneOf(Object.keys(CellComponents)),
  CellProps: PropTypes.object,
};
