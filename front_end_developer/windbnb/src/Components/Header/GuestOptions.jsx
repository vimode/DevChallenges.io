import React from 'react';

import './Header.css'


const GuestOptions = ({type, helperText, showCounter, count, counter, adultCount, childCount, city, sign}) => {
  return (
    <>
    <div className="guest_layout">
    <p className="guest_counter_title">{type}</p>
    <p className="guest_helper_text">{helperText}</p>
    <div className="guest_counter_btn">
      <button
      className="btn_count"
      onClick={()=>{
        count(sign, type)
      }}
      >+</button>
        {/* <p>{type==='Adults'? adultCount:childCount}</p> */}
        <p>0</p>
    
      <button
      className="btn_count"
      onClick={()=>{
        count(sign, type)
      }}
      >-</button>

    </div>

    </div>
    </>

  )
}

export default GuestOptions;