import React from 'react';

import './style.css'

const RadioButtonSelector = ({
  getRadioOptions,
  radioName,
  options,
  sizeChange,
  disabled,
  iconsClassName
}) => {

  getRadioOptions = (radioOptions, name) =>
    radioOptions.map((item, idx) => (
      <div key={idx}>
        <input
          type="radio"
          id={item}
          name={name}
          value={item.replace(/\s+/g, '').toLowerCase()}
          onChange={handleChange}
          disabled={disabled}
        />
        <label htmlFor={item} className=
          {`${iconsClassName}`}>{item}</label>
      </div >
    ));


  const handleChange = (e) => {
    sizeChange(e.target.value)
  }

  return (
    <form className="radioButtonForm">
      {getRadioOptions(options, radioName)}
    </form>
  )
}

export default RadioButtonSelector;