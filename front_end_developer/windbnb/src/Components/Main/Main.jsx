import React from 'react';

import './Main.css'


import ListingItem from './ListingItem'

const Main = ({countryName, stayCounts}) => {
  return (
    <div className="inner_wrapper">
      <div className="">
      <h2>{` Stays in ${countryName}`}</h2>
      <p>{` ${stayCounts}+ stays`}</p>
      </div>
      <ListingItem />
    </div>
  )
}


export default Main;