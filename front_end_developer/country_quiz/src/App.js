import React, { useState, useEffect } from 'react';

import './App.css';

import InfoCard from './Components/InfoCard';
import QuizCard from './Components/QuizCard';

import image1 from './assets/undraw_adventure_1.svg';
import image2 from './assets/undraw_winners_2.svg';

function App() {

  const maxQuestions = 4;
  const maxOptions = 4;
  const questionTypes = ["capital", "flag"];
  const options_index = ['A ', 'B ', 'C ', 'D '];


  const [questionData, setQuestionData] = useState(); //all the fetches questions w/ relevant data
  const [quizQuestion, setQuizQuestion] = useState(); // the single current quiz Q
  const [allOptions, setAllOptions] = useState(); // 4 options to choose from 
  const [questionCount, setQuestionCount] = useState(0); // question counter
  const [score, setScore] = useState(0); // score counter
  const [isOptionSelected, setIsOptionSelected] = useState(); // track user click of the option
  const [otherOptionSelected, setOtherOptionSelected] = useState(); // track user click of the option if wrong
  const [scorePage, setScorePage] = useState(); // to load score page

  // random genenerator w/ limits
  const randomGen = (min = 0, max) => {
    let randNum = Math.random() * (max - min) + min;
    return Math.floor(randNum)
  }

  // process generated question from all the fetched questions
  const generateQuestion = () => {
    if (questionData) {
      let currentQuestion = {};
      // create a random array of 4 countries 
      let optionsList = Array.from({ length: maxOptions }, () => randomGen(0, questionData.length))

      // create 4 country names for 4 quiz's answer options from the ^ random array
      setAllOptions(
        optionsList.map((option, index) =>
          options_index[index] + questionData[option].name
        )
      )

      // choose a random option as the correct answer
      let correctAnswer = optionsList[randomGen(0, maxOptions)];

      // choose a type of question to generate question
      let randomType = questionTypes[randomGen(0, questionTypes.length)]

      // based on ^ type generate appropriate question
      switch (randomType) {

        case "capital":
          currentQuestion = {
            question: `${questionData[correctAnswer].capital} is the capital of`,
            answer: options_index[optionsList.findIndex((option) => option === correctAnswer)] + questionData[correctAnswer].name, // from the random options array findIndex() for the chosen correct answer and set that option index as the correct answer  
          };
          break;

        case "flag":
          currentQuestion = {
            image: questionData[correctAnswer].flag,
            question: `This flag belongs to`,
            answer: options_index[optionsList.findIndex((option, index) => option === correctAnswer)] + questionData[correctAnswer].name,
          };
          break;

        default:
          break;
      }
      setQuizQuestion(currentQuestion)
    }
  }

  const handleOptionClick = (event) => {
    const selectedOption = event.target;
    let correctOption = selectedOption.textContent === quizQuestion.answer;

    if (correctOption) {
      setScore(score + 1);
    } else if (!correctOption) {
      setOtherOptionSelected(selectedOption)
      selectedOption.classList.add('altselection')
    }
    setIsOptionSelected(selectedOption);
    selectedOption.classList.add("selected");
  };

  const handleNext = () => {

    if (questionCount >= maxQuestions) {
      setScorePage(true);
    } else {
      const newQuestion = { ...quizQuestion };
      setQuizQuestion(newQuestion);
      setScorePage(false)
      setQuestionCount(questionCount + 1);
      isOptionSelected.classList.remove("selected");
      isOptionSelected.classList.remove("altselection");
      setIsOptionSelected(false);
      setOtherOptionSelected(false);
      generateQuestion();
    }
  };

  const restartQuiz = () => {
    setQuizQuestion(false);
    setScorePage(false);
    setIsOptionSelected(false);
    setOtherOptionSelected(false);
    setScore(0);
    setQuestionCount(0)
  }

  useEffect(() => {
    async function getCountryData() {
      const url = "https://restcountries.com/v3.1/all";

      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        // fetch data and create a object with some of the data
        const countriesData = fetchedData?.map((country) => {
          const countryDetails = {
            name: country.name.common,
            flag: country.flags.svg,
            capital: country.capital,
            population: country.population,
          }
          return countryDetails;
        });
        setQuestionData(countriesData)
      }
      catch (error) {
        console.log(error);
      }
    }
    getCountryData()
  }, []);

  return (

    <div className="App">
      <h1 className="quiz_heading">Country Quiz</h1>
      <div className="card_container">
        {questionData ? (
          <div className="card_items">
            {/* starter page */}
            {!quizQuestion && !scorePage ? (
              <InfoCard
                imgSrc={image1}
                buttonText="Start"
                startQuiz={generateQuestion}
              />
            ) :
              // End game page / score page  / restart  
              scorePage ? (
                <InfoCard
                  imgSrc={image2}
                  buttonText="Try Again"
                  titleText="Results"
                  scorePage={scorePage}
                  score={score}
                  startQuiz={restartQuiz}
                />
              ) : (
                // Quiz Card
                <QuizCard
                  image1={image1}
                  quizQuestion={quizQuestion}
                  allOptions={allOptions}
                  isOptionSelected={isOptionSelected}
                  handleOptionClick={handleOptionClick}
                  otherOptionSelected={otherOptionSelected}
                  questionCount={questionCount}
                  maxQuestions={maxQuestions}
                  handleNext={handleNext}
                />
              )}
          </div>
        ) : (
          // loading icon
          <div className="loading_icon"></div>
        )}
      </div>
    </div>
  );
}

export default App;
