import React from 'react';
import PropTypes from 'prop-types';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react';

export const CellRadios = ({ radioName, defaultValue, radioContents }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <RadioGroup onChange={setValue} value={value} name={radioName}>
      <Stack direction='column'>
        {
          radioContents.map((radioContent, index) => (
            <Radio value={radioContent['value']} key={index}>{radioContent['content']}</Radio>
          ))
        }
      </Stack>
    </RadioGroup>
  );
};

CellRadios.propTypes = {
  radioName: PropTypes.string, 
  defaultValue: PropTypes.string.isRequired,
  radioContents: PropTypes.shape({
    value: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

CellRadios.defaultProps = {
  radioName: '', 
  defaultValue: '',
  radioContents: [
    {value: '', content: ''},
  ],
};
  
