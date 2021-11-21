import React, { useState, useEffect } from "react";

import Header from "./Components/Header";
import Quote from './Components/Quote';
import Footer from './Components/Footer';

import './App.css';

function App() {

  const [randomQuote, setrandomQuote] = useState();
  const [quoteList, setQuoteList] = useState();

  const generateRandomQuote = async function () {
    setQuoteList(false);
    const url = "https://api.quotable.io/random"

    try {
      const response = await fetch(url);
      const resQuote = await response.json();
      setrandomQuote(resQuote)
    } catch (error) {
      console.log(error)
    }
  };

  const generateAuthorQuotesList = async function () {
    const url = `https://api.quotable.io/quotes?author=${randomQuote.author}`;
    setrandomQuote(false);

    try {
      const response = await fetch(url);
      const resQuoteList = await response.json()
      setQuoteList(resQuoteList.results);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    generateRandomQuote();
  }, []);


  return (
    <div className="App">

      <Header
        quoteGenerator={generateRandomQuote}
      />
      <Quote
        generatedQuote={randomQuote}
        generateQuoteList={generateAuthorQuotesList}
        authorQuoteList={quoteList}
      />
      <Footer />
    </div>
  );
}

export default App;
