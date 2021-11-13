import React, {useState} from 'react'

import './Main.css'

import Todo from './Todo.jsx'

const TodoList = ({todos,updateCheckbox, setFilter,deleteTask}) => {

   const todoItems = todos.map (
   (task) => {
     return (
       <Todo
       key = {task.id}
       id={task.id}
       title = {task.title}
       completed = {task.completed}
       deleteTask = {deleteTask}
       task = {task}
       updateCheckbox = {updateCheckbox}
       setFilter= {setFilter}
       />
     )
   }
  );

  return (
    <ul className = "todoList">
      {todoItems}
    </ul>

  );
};

export default TodoList;