import React from "react";

// dynamic inputs
const TextArea = ({
  inputType,
  inputValue,
  inputName,
  setInputValue,
  inputClassName,
  inputPlaceHolder,
  inputInline,
}) => (
  <textarea
    className={inputClassName}
    style={inputInline}
    placeholder={inputPlaceHolder}
    type={inputType}
    value={inputValue}
    name={inputName}
    onChange={(e) => setInputValue(e.target.value)}
  />
);

export default TextArea;
