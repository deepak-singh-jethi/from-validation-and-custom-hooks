import { useState } from "react";

export function useInput(defaultValue, validationFun) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [notOnFocus, setNotOnFocus] = useState(false);

  const valueIsValid = validationFun(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setNotOnFocus(false);
  }
  function handleInputBlur() {
    setNotOnFocus(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: !valueIsValid && notOnFocus,
  };
}
