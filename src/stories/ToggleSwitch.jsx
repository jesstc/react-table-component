import React from 'react';
import { Switch } from '@chakra-ui/react'
import { useState } from 'react';

export const CellToggleSwitch = ({ id, isSwitchChecked, isSwitchReadonly, isSwitchDisabled }) => {
  const [isChecked, setIsChecked] = useState(isSwitchChecked);

  return (
    <Switch
      id={id}
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      isReadOnly={isSwitchReadonly}
      isDisabled={isSwitchDisabled}
    />
  );
};

CellToggleSwitch.defaultProps = {
  id: '',
  isSwitchChecked: false,
  isSwitchReadonly: false,
  isSwitchDisabled: false,
};
  
