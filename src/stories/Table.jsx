import React from 'react';
import PropTypes from 'prop-types';
import CellComponents from './cellcomponents/CellComponents';
import { HeaderCell } from './tablecomponents/HeaderCell';
import { BodyCell } from './tablecomponents/BodyCell';

const allTypes = Object.keys(CellComponents);
  
export const Table = ({ columnNum = 3, fixedPosition = 'row', fixedFirstCell = false, fixedLastCell = false, headLabels, cellTypes, data }) => {
  return (
    <table>
    </table>
  );
};

Table.propTypes = {
    columnNum: PropTypes.number,
    fixedPosition: PropTypes.oneOf(['row', 'column']),
    fixedFirstCell: PropTypes.bool,
    fixedLastCell: PropTypes.bool,
    headLabels: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string.isRequired,
            isSorting: PropTypes.bool.isRequired,
        })
    ).isRequired,
    cellTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)).isRequired,
    data: PropTypes.object.isRequired,
};
