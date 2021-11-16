import React from "react";

function GuestCounter ({title, subtitle, setGuests, guests}) {

  function clickHandler(event) {
    if(event.target.id === "subtract") {
      setGuests((prevGuests) => {
        return prevGuests === 0 ? 0 :prevGuests -1 ;
      });
      } else {
        setGuests((prevGuests) => {
          return prevGuests +1;
        })
      }
    }
  
  return (
    <div class="guestCounter_wrapper">
      <h4>{title}</h4>
      <p className="age">{subtitle}</p>
      <div className="button_wrapper">
        <button className="btn" id="subtract"
        onClick={clickHandler}>-</button>
        <p>{guests}</p>
        <button className="btn" id="add"
        onClick={clickHandler}>+</button>
      </div>
    </div>
  )
}

export default GuestCounter;