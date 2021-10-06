import "./Button.css";

const Button = props => {

  const variant = props.variant ? `${props.variant}` : '';
  const disabled = props.disabled ? props.disabled : '';
  const color = props.color ? `${props.color}` : '';
  const bgColor = props.bgColor ? `${props.bgColor}` : ``;
  const hoverEnabled = props.hoverEnabled ? 'hoverEnabled' : '';
  const disableShadow = props.disableShadow ? 'disableShadow' : '';
  const size = props.size ? `${props.size}` : '';
  const buttonText = disabled ? 'Disabled' : color === 'secondary' ? 'Secondary' : color === "danger" ? 'Danger' : 'Default';
  const icon = props.endIcon || props.startIcon ? "icon" : '';
  const startIcon = props.startIcon;
  const endIcon = props.endIcon;

  return (
    <button
      disabled={disabled}
      className={`${variant}
        ${color}
        ${bgColor}
        ${hoverEnabled}
        ${disableShadow}        
        ${size}
        ${icon}
        ${props.className}`}>
      {startIcon}{buttonText}{endIcon}
    </button>
  );

}

export default Button;