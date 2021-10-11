import "./Button.css";

const Button = ({
  variant, color, disabled, boxShadow, size, leftIcon, rightIcon
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
      {leftIcon && <span className='material-icons'>{leftIcon}</span>}
      Default
      {rightIcon && <span className="material-icons">{rightIcon}</span>}
    </button>
  );
};

export default Button;