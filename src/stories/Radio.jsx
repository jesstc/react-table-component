import React from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

export const CellRadios = ({ radioName, defaultValue, radioContents }) => {
  const [value, setValue] = React.useState(defaultValue);

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

CellRadios.defaultProps = {
  radioName: '', 
  defaultValue: '',
  radioContents: [
    {value: '', content: ''},
  ],
};
  
