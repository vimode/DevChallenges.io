import React, { useState } from 'react'

import './style.css'

const InputSelector = ({
  inputLabelText,
  inputName,
  checkedStatus,
  inputId,
  type,
  changeColor,
  disabled
}) => {

  const [checked, setChecked] = useState(false);
  const [colorValue, setColorValue] = useState('#ffffff')

  const handleChange = (e) => {


    if (inputName === "disable") {
      setChecked(!checked);
      console.log(checked)
      checkedStatus(checked)
    }
    if (type === "color") {
      setColorValue(e.target.value)
      changeColor(e.target.value)
    }

  }

  return (
    <form className={`inputSelector`}>
      <label htmlFor={inputId} >{inputLabelText}</label>
      <input
        type={type}
        id={inputId}
        name={inputName}
        checked={checked}
        onChange={handleChange}
        value={colorValue}
        disabled={disabled}
      />
    </form >
  )
}

export default InputSelector;