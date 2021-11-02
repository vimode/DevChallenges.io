import React from 'react'

import './Main.css'

import stays from '../../assets/stays.json'

const ListingItem = () => {

  return (
    <ul className="listing_wrapper">
      {stays.map((place,index)=> {
        return (
          <li className="listing_item">
            <img 
            src={place.photo}
            class="place_img"
            />
            <div className="listing_details">
              { place.superHost ? (
                <div className="details_rest">
                  <span className="place_superhost">Super Host</span> 
                  <span className="details_type">{ place.type }. { place.beds } beds</span>
                  <span className="details_ratings"><span class="material-icons icon_star">star_rate</span>{ place.rating }</span>
                </div>
                ) : (
                  <div className="details_rest">
                    <span className="details_type">{ place.type }</span>
                    <span className="details_ratings"><span class="material-icons icon_star">star_rate</span>{ place.rating }</span>
                  </div>
                ) }
                <div className="details_title">
                  {place.title}
                </div>
            </div>
          </li>
        )
      }) }

    </ul>
  )
}

export default ListingItem;