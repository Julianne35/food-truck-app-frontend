import React from "react";

// dynamic inputs
const Input = ({
  inputType,
  inputValue,
  inputName,
  setInputValue,
  inputClassName,
  inputPlaceHolder,
  inputInline,
  inputStep,
  inputID
}) => (
  <input
    className={inputClassName}
    id={inputID}
    placeholder={inputPlaceHolder}
    style={inputInline}
    type={inputType}
    value={inputValue}
    name={inputName}
    step={inputStep}
    onChange={(e) => setInputValue(e.target.value)}
  />
);

export default Input;
