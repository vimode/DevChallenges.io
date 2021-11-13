import React from 'react'

import './Main.css'

const Filter = ({ setActive, setFilter }) => {

  return (
    <section className="filter_options">
      <ul>
        <li>
          <a 
            className ={`filterClass ${setFilter === 'All' ? 'allActive' : ''}`}
            onClick= { setActive }
            href="#">All</a>
        </li>
        <li>
          <a 
            className ={`filterClass + ${setFilter === 'Active' ? 'activeActive' : ''}`}
            onClick= { setActive }
            href="#">Active</a>
        </li>
        <li>
          <a 
            className ={`filterClass + ${setFilter === 'Completed' ? 'completedActive' : ''}`}
            onClick= { setActive }
            href="#">Completed</a>
        </li>
      </ul>
    </section>
  )
}

export default Filter;