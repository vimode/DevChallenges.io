import { useState } from 'react';

import "./Main.css"
import Button from "../Button";
import ActionButton from '../ActionButton';

const Main = () => {

  const [variant, setVariant] = useState("default");
  const [btnSize, setbtnSize] = useState('md');
  const [disabled, setDisabled] = useState(false);
  const [bShadow, setbShadow] = useState('shadow');
  const [btnStartIcon, setBtnStartIcon] = useState('');
  const [btnEndIcon, setBtnEndIcon] = useState('');
  const [btnText, setBtnText] = useState("Default");

  const selectType = (e) => {
    e.preventDefault()

    function resetState() {
      setVariant("default")
      setbtnSize("md")
      setDisabled(false)
      setbShadow("shadow")
      setBtnText("Default")
      setBtnStartIcon('')
      setBtnEndIcon('')
    }

    function btnType(checker) {
      setVariant(checker)
    }

    function btnSizer(checker) {
      setbtnSize(checker)
    }

    function btnTextSetter(checker) {
      checker === "primaryBtn" ? setBtnText("Primary") :
        checker === "secondaryBtn" ? setBtnText("Secondary") :
          checker === "dangerBtn" ? setBtnText("Danger") : setBtnText("Default")
    }

    let checker = e.target.name;
    switch (checker) {
      case 'defaultBtn':
      case 'variantText':
      case 'outline':
        resetState()
        btnType(checker)
        break;
      case 'disableShadow':
        resetState()
        setbShadow(checker)
        break;
      case 'textDisabled':
        resetState()
        setVariant("variantText")
        setDisabled(true)
        break;
      case 'disabled':
        resetState()
        setDisabled(true)
        break;
      case 'startIcon':
        resetState()
        setBtnStartIcon('local_grocery_store')
        break;
      case 'endIcon':
        resetState()
        setBtnEndIcon('local_grocery_store')
        break;
      case 'smSize':
      case 'mdSize':
      case 'lgSize':
        resetState()
        btnSizer(checker)
        break;
      case 'primaryBtn':
      case 'secondaryBtn':
      case 'dangerBtn':
        resetState()
        btnType(checker)
        btnTextSetter(checker)
        break;
      default:
        console.log('01010011 01001111 01010011')
    }
  }

  return (
    <main>
      <div className="container top_button">
        <Button
          variant={variant}
          boxShadow={bShadow}
          disabled={disabled}
          size={btnSize}
          btnText={btnText}
          startIcon={btnStartIcon}
          endIcon={btnEndIcon}
        />
      </div>

      <h2>Buttons</h2>
      <div className="container">
        <div className="inner_container">
          <p>{"Default"}</p>
          <ActionButton
            name="defaultBtn"
            onClick={(e) => selectType(e)}
          />
        </div>

        <div className="inner_container">
          <p>{'variant = outline'}</p>
          <ActionButton
            className="outline"
            name="outline"
            onClick={selectType}
          />
        </div>

        <div className="inner_container">
          <p>{'variant=text'}</p>
          <ActionButton
            name="variantText"
            color="primary"
            onClick={selectType}
          />
        </div>

        <div className="inner_container">
          <p>{"disableShadow"}</p>
          <ActionButton
            name="disableShadow"
            disableShadow
            onClick={selectType}
          />
        </div>

        <div className="inner_container">
          <p>{"disabled"}</p>
          <ActionButton
            name="disabled"
            onClick={selectType}
          />
        </div>

        <div className="inner_container">
          <p>{`variant=text disabled`}</p>
          <ActionButton
            name="textDisabled"
            onClick={selectType}
          />
        </div>

        <div className="inner_container">
          <p>{`startIcon`}</p>
          <ActionButton
            name="startIcon"
            onClick={selectType}
            startIcon="local_grocery_store"
          ></ActionButton>
        </div>

        <div className="inner_container">
          <p>{`endIcon`}</p>
          <ActionButton
            name="endIcon"
            onClick={selectType}
            endIcon="local_grocery_store"
          />
        </div>

        <div className="inner_container">
          <p>{`size=sm`}</p>
          <ActionButton
            name="smSize"
            onClick={selectType}
          />
        </div>

        <div className="inner_container">
          <p>{`size="md"`}</p>
          <ActionButton
            name="mdSize"
            onClick={selectType}
          />
        </div>

        <div className="inner_container">
          <p>{`size="lg"`}</p>
          <ActionButton
            name="lgSize"
            onClick={selectType}
          />
        </div>

        <div className="inner_container">
          <p>{`color="default"`}</p>
          <ActionButton
            name="defaultBtn"
            onClick={selectType}
          />
        </div>

        <div className="inner_container">
          <p>{`color="primary"`}</p>
          <ActionButton
            name="primaryBtn"
            onClick={selectType}
            btnText="Primary"
          />
        </div>

        <div className="inner_container">
          <p>{`color="secondary"`}</p>
          <ActionButton
            name="secondaryBtn"
            onClick={selectType}
            btnText="Secondary"
          />
        </div>

        <div className="inner_container">
          <p>{`color="danger"`}</p>
          <ActionButton
            name="dangerBtn"
            onClick={selectType}
            btnText="Danger"
          />
        </div>

      </div>
      <div className="container footer">
        <p className="att">Challenge by <a href="https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY">DevChallenges</a>
          <br />
          Coded by <a href="https://github.com/ppusher/DevChallenges.io/">ppusher</a>
        </p>
      </div>


    </main >
  )

}

export default Main;