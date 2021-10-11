
const ActionButton = ({
  boxshadow,
  disabled,
  onClick,
  startIcon,
  endIcon,
  btnText,
  name
}) => {

  return (
    <button
      className={`btn ${name}`}
      disabled={disabled}
      onClick={onClick}
      boxshadow={boxshadow}
      name={name} >
      {startIcon && <span className='material-icons'>{startIcon}</span>}
      {btnText === '' ? 'Default' : btnText === 'Primary' ? 'Primary' : btnText === 'Secondary' ? 'Secondary' : btnText === 'Danger' ? 'Danger' : 'Default'}
      {endIcon && <span className="material-icons">{endIcon}</span>}
    </button >
  );
};

export default ActionButton;