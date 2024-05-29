import React from 'react';
import PropTypes from 'prop-types';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react';

export const CellRadios = ({ defaultValue = '', radioName = '', radioContents }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <RadioGroup onChange={setValue} value={value} name={radioName}>
      <Stack direction='column'>
        {
          radioContents.map((radioContent, index) => (
            <Radio size='sm' value={radioContent['value']} key={index}>{radioContent['content']}</Radio>
          ))
        }
      </Stack>
    </RadioGroup>
  );
};

CellRadios.propTypes = {
  radioName: PropTypes.string, 
  defaultValue: PropTypes.string.isRequired,
  radioContents: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
  