import React from 'react';

const Button = ( {buttonType, buttonText, handleButtonClick, buttonIcon, iconClass}) => {

  return (

    <button 
    className={`buttonClass ${buttonType}`}
    onClick={handleButtonClick}
    >
      {buttonText}
      {buttonIcon && <span className={`material-icons ${iconClass}`}>{buttonIcon}</span>}
    </button>

  )
}

export default Button;