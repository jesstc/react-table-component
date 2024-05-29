import React from 'react';
import PropTypes from 'prop-types';
import CellComponents from './cellcomponents/CellComponents';
import { HeaderCell } from './tablecomponents/HeaderCell';
import { BodyCell } from './tablecomponents/BodyCell';

const allTypes = Object.keys(CellComponents);
  
export const Table = ({ columnNum = 3, fixedPosition = 'row', fixedFirstCell = false, fixedLastCell = false, headLabels, cellTypes, data }) => {
    let errorMsg = '';
    // check the value of `columnNum` range from 3 to 40
    (columnNum < 3 || columnNum > 40) &&
        (errorMsg = 'The `columnNum` should be the number between 3 and 40.');
    // check the number of items in `headLabels` and `cellTypes` are equal to `columnNum`
    if (headLabels && cellTypes) 
        (headLabels.length !== columnNum || cellTypes.length !== columnNum) &&
            (errorMsg = 'The format of variable is wrong. Please check your variable formats.');
    else errorMsg = '`headLabels` and `cellTypes` should not be empty.';
    // check if `cellTypes` is correct
    cellTypes.map((cellType) => {
        !Object.keys(CellComponents).includes(cellType) && (errorMsg = '`' + cellType + '` is a incorrect cellType. Please check `BodyCell` to see more information.');
    });
    
    if (errorMsg !== '') return <div>{errorMsg}a</div>;
    return (
        <table>
            <thead>
                <tr>
                    {headLabels.map((headCell, index) => (
                        <HeaderCell key={index} cellTextProps={headCell} />
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cellProps, colIndex) => (
                            <BodyCell key={colIndex} cellType={cellTypes[colIndex]} cellProps={cellProps} />
                        ))}
                    </tr>
                ))}
            </tbody>
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
            isSorting: PropTypes.bool,
        })
    ).isRequired,
    cellTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)).isRequired,
    data: PropTypes.array.isRequired,
};
