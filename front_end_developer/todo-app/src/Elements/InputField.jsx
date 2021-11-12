import React from 'react'

const InputField = ({ inputType,inputUse, value, onKeyPress , onChange, placeholder, name, checked}) => {

  return (
    <input 
    className = {inputUse}
    type= {inputType}
    value = {value}
    onKeyPress= {onKeyPress}
    onChange = {onChange}
    name= {name}
    placeholder = {placeholder}
    checked = {checked}
    />
  )
}

export default InputField;