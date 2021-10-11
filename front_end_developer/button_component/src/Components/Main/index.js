import { useState } from 'react';

import "./Main.css"
import Button from "../Button";
import ActionButton from '../ActionButton';

const Main = () => {

  const [variant, setVariant] = useState("default");
  const [btnSize, setbtnSize] = useState('md');
  const [disabled, setDisabled] = useState(false);
  const [bShadow, setbShadow] = useState('shadow');
  const [btnStartIcon, setBtnStartIcon] = useState(false);

  const selectType = (e) => {
    e.preventDefault()

    function btnType(checker) {
      setVariant(checker)
      setDisabled(false)
    }

    function btnSizer(checker) {
      setbtnSize(checker)
      setDisabled(false)
    }

    let checker = e.target.name;
    switch (checker) {
      case 'defaultBtn':
      case 'variantText':
      case 'outline':
        btnType(checker)
        break;
      case 'disableShadow':
        setbShadow(checker)
        break;
      case 'textDisabled':
      case 'disabled':
        setDisabled(true)
        break;
      case 'startIcon':
        setBtnStartIcon(true)
        break;
      case 'smSize':
      case 'mdSize':
      case 'lgSize':
        btnSizer(checker)
        break;
      case 'primaryBtn':
      case 'secondaryBtn':
      case 'dangerBtn':
        btnType(checker)
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
          startIcon={btnStartIcon}
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
          />
        </div>

        <div className="inner_container">
          <p>{`endIcon`}</p>
          <ActionButton
            name="endIcon"
            onClick={selectType}
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
          />
        </div>

        <div className="inner_container">
          <p>{`color="secondary"`}</p>
          <ActionButton
            name="secondaryBtn"
            onClick={selectType}

          />
        </div>

        <div className="inner_container">
          <p>{`color="danger"`}</p>
          <ActionButton
            name="dangerBtn"
            onClick={selectType}
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