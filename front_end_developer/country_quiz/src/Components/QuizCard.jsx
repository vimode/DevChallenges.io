import React from 'react';

import './QuizCard.css';


const QuizCard = ({image1, quizQuestion, allOptions, isOptionSelected, handleOptionClick, otherOptionSelected, questionCount, maxQuestions,handleNext}) => {
  return (

  <div className="quiz_container">
    <img src={image1} className="card_header_img" alt="adventure" />
    { quizQuestion.image && 
    (<figure className="quiz_image">
      <img src={quizQuestion.image} alt="country-flag"></img>
      </figure>)
      }
    <div className="card_question">{quizQuestion?.question}
    </div>
    <div className="card_options">
      {allOptions.map((option, index) => (
      <button
        key={index}
        className= {`quiz_option 
          ${option === quizQuestion.answer ? `highlight_option ${isOptionSelected ? 
            "selected" : ""}`: 
            "alt_highlight_option"}`}
        onClick={(e) => handleOptionClick(e)}
        disabled={isOptionSelected}
        >
        {option}
        
        {option === quizQuestion.answer && isOptionSelected 
          && (
          <span className="material-icons">
          check_circle_outline</span>)
        }
        
        {option !== quizQuestion.answer &&otherOptionSelected && (
          <span className="material-icons">
          highlight_off</span>)
        }
      </button>
      ))}
    </div>

    <div className="quiz_button_container">
    {(questionCount === maxQuestions && isOptionSelected) ? 
    (<button
      className={"quiz_button"}
      onClick={() => handleNext()}>
      Result
    </button>) : 
    isOptionSelected ? 
    (<button
      className={"quiz_button"}
      onClick={() => handleNext()}>
      Next
    </button>
    ) : null
  }
    </div>
  </div>

  )
}

export default QuizCard;
