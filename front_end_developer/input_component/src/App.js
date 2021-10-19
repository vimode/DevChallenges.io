import React, { useState, useEffect } from 'react'

import './App.css';
import MainInput from './Components/MainInput';
import InputSelector from './Components/InputSelector';
import DropdownSelector from './Components/DropdownSelector';
import RadioButtonSelector from './Components/RadioButtonSelector'


function App() {

  const [disabledState, setDisabledState] = useState(false);
  const [inputSize, setInputSize] = useState("medium");
  const [actionText, setActionText] = useState("Disabled");
  const [bgColor, setBgColor] = useState('');
  const [icon, setIconChange] = useState('');
  // const [iconPos, setIconPos] = useState('startIcon');

  const icons = [
    '',
    'text_fields',
    'translate',
    'alternate_email',
    'password',
    'translate'
  ]

  const sizeOptions = [
    'Small',
    'Medium',
    'Full Width'
  ];

  const secondaryText = [
    'None',
    'Error',
    'Helper'
  ]

  const handleDisabled = (checked) => {
    setDisabledState(!disabledState)
  }

  const handleSizeChange = (value) => {
    setInputSize(value)
  }

  const handleSecondayText = (value) => {
    setActionText(value)
  }

  const handleColorChange = (value) => {
    setBgColor(value)
  }

  const handleIconChange = (value) => {
    setIconChange(value)
  }

  useEffect(() => {
    document.querySelector('.mainInput').style.backgroundColor = bgColor;
  }, [bgColor])


  return (
    <div className="App wrapper">
      <section className="main_input wrapper">
        <h1>Reusable Input Component</h1>
        <MainInput
          disabled={disabledState}
          inputSize={inputSize}
          actionText={actionText}
          bgColor={bgColor}
          icon={icon}
          selectedIcon={icon}
        />
      </section>

      <section className="options wrapper">

        <div className="inner_wrapper">
          <InputSelector
            inputLabelText='Disable'
            inputName='disable'
            inputid="disableInput"
            type="checkbox"
            checkedStatus={handleDisabled}
          />
        </div>

        <div className="inner_wrapper">
          <DropdownSelector
            options={secondaryText}
            optionsLabel="Text"
            optionsName="secondaryText"
            showText={handleSecondayText}
            disabled={disabledState}
          />
        </div>

        <div className="inner_wrapper">
          <RadioButtonSelector
            options={sizeOptions}
            radioName='size'
            sizeChange={handleSizeChange}
            disabled={disabledState}
          />
        </div>

        <div className="inner_wrapper">
          <RadioButtonSelector
            options={icons}
            radioName='icons'
            iconsClassName="material-icons"
            sizeChange={handleIconChange}
            disabled={disabledState}
          />
        </div>

        {/* <div className="inner_wrapper">
          <InputSelector
            name="iconPosition"
            inputLabelText="EndIcon"
            type="checkbox"
            changeIconPosition={handleIconPosition}
            disabled={disabledState}
          />
        </div> */}

        <div className="inner_wrapper">
          <InputSelector
            name="bgColor"
            inputLabelText="Color Picker"
            type="color"
            changeColor={handleColorChange}
            disabled={disabledState}
          />
        </div>

        {/*
          <div className="inner_wrapper">
          <InputTextArea /> ???
        </div>*/}


      </section>
    </div>
  );
}

export default App;
