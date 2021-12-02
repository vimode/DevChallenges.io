import React from 'react';

import './InfoCard.css';

const InfoCard = ({imgSrc, buttonText, startQuiz, titleText, scoreText, scorePage, score}) => {
  return (
    <>
    <div className="card">
      <img
        src={imgSrc}
        alt="starter"></img>
    </div>
      {scorePage && 
      <>
      <h1 className="alt_title">{titleText}</h1>
      <p className="alt_tet">You got <span className="score_highlight">{score}</span> correct answers</p>
      </>
      }
    <div className="button_wrapper">
      <button
        className="start_button"
        onClick={startQuiz}
      >
        {buttonText}
      </button>
    </div>
  </>

  )
}

export default InfoCard;