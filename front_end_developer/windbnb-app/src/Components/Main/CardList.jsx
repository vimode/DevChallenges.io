import React from "react";
import Card from "./Card"
import stays from "../../assets/stays.json"

import "./Main.css"

function CardList ( {location, searchClick }) {
  
  const locationQuery = location.split(",")[0];

  return (

    <div className ="cardList">
      {stays.filter((stay) => 
        searchClick ? stay.city === locationQuery : stay.country === "Finland"
      ).map((stay, index) => {
        return (
          <Card
          key = {index}
          source = {stay}
          />
          )
      })}
    </div>

  )
}

export default CardList;