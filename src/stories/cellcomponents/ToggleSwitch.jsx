import React from 'react';
import PropTypes from 'prop-types';
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

CellToggleSwitch.propTypes = {
  id: PropTypes.string, 
  isSwitchChecked: PropTypes.bool,
  isSwitchReadonly: PropTypes.bool,
  isSwitchDisabled: PropTypes.bool,
};

CellToggleSwitch.defaultProps = {
  id: '',
  isSwitchChecked: false,
  isSwitchReadonly: false,
  isSwitchDisabled: false,
};
  
