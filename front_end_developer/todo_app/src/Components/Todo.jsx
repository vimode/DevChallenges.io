import React from 'react'

import './Main.css'


const Todo = ({title, id, completed, deleteTask, setFilter, updateCheckbox}) => {

  const titleClass = `${completed && 'completed_task'}`

  return (
    <li className="todo">
      
      {setFilter !== 'Active' && completed ? (
        <span
        className = "material-icons checkbox_icon selected-checkbox"
        onClick={()=> {updateCheckbox(id)}}>
          check_box</span>
      ) : 
      setFilter !== 'Completed' && !completed ? (
        <span
        className = "material-icons  checkbox_icon blank-checkbox"
        onClick={()=> {updateCheckbox(id)}}>
          check_box_outline_blank</span>
      ) : 
        null }
      
       {setFilter === 'Active' && completed ? (null) : 
        setFilter === 'Completed' && !completed ? (null) :
       <span className ={`taskTitle ${titleClass}`} >{title}</span>} 
      
      {setFilter === 'Completed' && completed && (
      <span 
        className={"material-icons del_icon"}
        onClick= {()=> deleteTask(id)}>delete_outline</span>
      )}

    </li>

  )
}

export default Todo;