import "./Button.css";

const Button = ({
  variant, color, disabled, boxShadow, size, startIcon, endIcon, btnText
}) => {

  return (
    <button
      className={`btn 
      ${variant} 
      ${color} 
      ${boxShadow}
      ${size}
      ${color}
      `}
      disabled={disabled}>
      {startIcon && <span className='material-icons'>{startIcon}</span>}
      {btnText}
      {endIcon && <span className="material-icons">{endIcon}</span>}
    </button>
  );
};

export default Button;