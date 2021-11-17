import React from "react"

import './SearchBar.css'


function SearchSuggestion ( {sendQuery, query}) {
  return (
    <li className="list_wrapper">
      <span className="material-icons loc_icon">room</span>
      <p onClick={sendQuery}>{query}</p>
    </li>

  )
}

export default SearchSuggestion;