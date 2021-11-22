import React from "react"

import './Quote.css'

const Quote = ({ generatedQuote, generateQuoteList, authorQuoteList }) => {
  return (
    <div className="quote_outer_wrapper">
    {generatedQuote ? (
      <div className="quote_inner_wrapper">
        <div className="quote_text">{generatedQuote.content}</div>

        <div
          className="quote_author_wrapper"
          onClick = {generateQuoteList}
        >
          <div className="quote_author">
            <p>{generatedQuote.author}</p>
            <div className="quote_tags">{generatedQuote.tags.join(", ")}</div>
          </div>
          <div className="quote_icon">
            <span className="material-icons arrow_icon">arrow_forward</span>
          </div>
        </div>
      </div>
    ) : authorQuoteList ? (
      <div className="quote_inner_wrapper">
      <h2 className="quoteList_author">
        {/* <span class="material-icons chevron_back">arrow_back_ios_new</span> */}
        {authorQuoteList[0].author}
      </h2>
        {authorQuoteList.map((quote) => (
          <div className="quote_text" key={quote._id}>
            {quote.content}
          </div>
        ))}
      </div>
      
    ) : (
      
      <div className="loading_icon"></div>
      )}
      </div>
  )
}

export default Quote;