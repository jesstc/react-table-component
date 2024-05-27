import React from 'react';
import { Select } from '@chakra-ui/react'
import { useState } from 'react';

export const CellDropdown = ({ dropdownName, defaultValue, dropdownContents, placeholderText }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Select 
      name={dropdownName}
      value={selectedOption} 
      onChange={handleChange} 
      placeholder={placeholderText}
    >
      {
        dropdownContents.map((dropdownContent, index) => (
          <option value={dropdownContent['value']} key={index}>{dropdownContent['content']}</option>
        ))
      }
    </Select>
  );
};

CellDropdown.defaultProps = {
  placeholderText: 'Select Option', 
  defaultValue: '',
  dropdownContents: [
    {value: '', content: ''},
  ],
};
  
