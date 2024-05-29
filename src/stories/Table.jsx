import React from 'react';
import PropTypes from 'prop-types';
import CellComponents from './cellcomponents/CellComponents';
import { HeaderCell } from './tablecomponents/HeaderCell';
import { BodyCell } from './tablecomponents/BodyCell';
import './Table.css';

const allTypes = Object.keys(CellComponents);
  
export const Table = ({ columnNum = 3, fixedFirstRow = false, fixedLastRow = false, fixedFirstCol = false, fixedLastCol = false, headLabels, cellTypes, data }) => {
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
    
    if (errorMsg !== '') return <div>{errorMsg}</div>;
    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr className={fixedFirstRow ? 'fixed-first-row' : ''}>
                        {headLabels.map((headCell, index) => (
                            <HeaderCell 
                                key={index} 
                                isFixFirstCol={fixedFirstCol && index == 0} 
                                isFixLastCol={fixedLastCol && index+1 == headLabels.length} 
                                cellTextProps={headCell} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className={(fixedLastRow && rowIndex+1 == data.length) ? 'fixed-last-row' : ''}>
                            {row.map((cellProps, colIndex) => (
                                <BodyCell 
                                    key={colIndex} 
                                    isFixFirstCol={fixedFirstCol && colIndex == 0} 
                                    isFixLastCol={fixedLastCol && colIndex+1 == row.length} 
                                    cellType={cellTypes[colIndex]} 
                                    cellProps={cellProps} />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

Table.propTypes = {
    columnNum: PropTypes.number,
    fixedFirstRow: PropTypes.bool,
    fixedLastRow: PropTypes.bool,
    fixedFirstCol: PropTypes.bool,
    fixedLastCol: PropTypes.bool,
    headLabels: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string.isRequired,
            isSorting: PropTypes.bool,
        })
    ).isRequired,
    cellTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)).isRequired,
    data: PropTypes.array.isRequired,
};
