import React from 'react'

import './Button.css'

const Button =  ( {buttonText,buttonType,onClick}) => {
  return(
    <button 
    className= {`${buttonType}`}
    onClick = {onClick}
    >
     {buttonText === 'delete all' && <span 
      className={"material-icons"}>delete_outline</span>} {buttonText}
    </button>
  )
}

export default Button;