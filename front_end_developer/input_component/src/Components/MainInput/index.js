import React from 'react';

import './style.css'

const MainInput = ({
  actionText,
  disabled,
  placeholderText,
  inputSize,
  iconPos,
  selectedIcon
}) => {

  return (
    <form className="MainInputForm">
      <label className={`inputFormLabel_${actionText.toLowerCase()}`}>
        Label
      </label>
      <div className={`inputWrapper ${inputSize}`}>
        <input
          type="text"
          placeholder={placeholderText}
          disabled={disabled}
          className={`mainInput ${inputSize} ${actionText.toLowerCase()}`}
        />
        <p className={`material-icons inputIcons ${iconPos}`}>{selectedIcon}</p>
      </div>
      <p className={`smallText ${actionText.toLowerCase()}`}>
        {actionText === "Disabled" ? '' :
          actionText === "Error" ? 'Error Text' :
            actionText === "Helper" ? 'Help text' : ''
        }

      </p>
    </form >
  )
}

export default MainInput;