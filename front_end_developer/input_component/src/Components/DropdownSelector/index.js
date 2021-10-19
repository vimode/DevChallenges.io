const DropdownSelector = ({
  optionsLabel,
  options,
  optionsName,
  showText,
  disabled
}) => {


  const getDefaultOptions = (itemOptions) =>
    itemOptions.map((item, idx) => (
      <option key={idx} value={item}>{item}</option>
    ));

  const handleChange = (e) => {
    showText(e.target.value)
  }

  return (
    <div>
      <label htmlFor={optionsLabel}>{optionsLabel} : </label>
      <select
        name={optionsName}
        id={optionsLabel}
        onChange={handleChange}
        disabled={disabled}
      >
        {getDefaultOptions(options)}
      </select>
    </div>

  )
}

export default DropdownSelector;