import React from "react";

function Card ( {source}) {
  
  const { superHost, title, rating, type, beds, photo} = source;
  
  return (

    <div className="card">
      <div className="img_wrapper">
        <img className="card_img" src={photo} alt=""/>
      </div>

      <div className="inner_wrapper">
      {superHost && <p className="superHost">Super Host</p>}
      <p className="type">{type}.</p>
      {superHost && beds && <p className="beds"> {beds} beds</p>}
      <div className="rating_wrapper">
        <div className ="rating">
          <span className="material-icons-round star_icon">star</span>
          <p>{rating}</p>
        </div>
      </div>
      </div>

    <h3>{title}</h3>
    </div>

  )
}
export default Card;