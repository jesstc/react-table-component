import React, { useState, useEffect } from 'react';
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
    cellTypes.map((cellType, index) => {
        // check if `cellTypes` is correct
        !Object.keys(CellComponents).includes(cellType) && (errorMsg = '`' + cellType + '` is a incorrect cellType. Please check `BodyCell` to see more information.');
        // check if the header cell can be sorted (the column can be sorted only if it is CellText)
        headLabels[index].isSorting && (cellType !== 'CellText' && (errorMsg = '`' + cellType + '` can not be sorted. The column can be sorted only when the cell type is `CellText`.'));
    });


    // handle sorting
    const [sortedData, setSortedData] = useState(data);
    const [sortConfig, setSortConfig] = useState({ key: '0', direction: 'asc' });
    const handleSorting = (key, isSorting) => {
        if (isSorting) {
            let direction = 'asc';
            if (sortConfig.key === key && sortConfig.direction === 'asc') {
              direction = 'desc';
            }
            setSortConfig({ key, direction });
        };
    };

    // 監聽 useState 的參數 發生改變時才會執行
    useEffect(() => {
        // sorting
        const sorting = [...sortedData].sort((a, b) => {
            if (sortConfig.key) {
                const aValue = a[sortConfig.key].content;
                const bValue = b[sortConfig.key].content;
            
                if (aValue < bValue) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                else if (aValue > bValue) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            }
            return 0;
        });

        setSortedData(sorting);
    }, [sortConfig]);
        
    
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
                                cellTextProps={headCell}
                                onClick={() => handleSorting(index, headCell.isSorting)} 
                            />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, rowIndex) => (
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
