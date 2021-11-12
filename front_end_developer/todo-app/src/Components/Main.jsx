import React, {useState} from 'react'

import Filter from './Filter.jsx';
import TodoList from './TodoList.jsx'

import InputField from '../Elements/InputField.jsx';
import Button from '../Elements/Button.jsx';

import './Main.css'

const Main = () => { 

  const [selectedFilter, setSelectedFilter] = useState('All')

  const [currentInput, setCurrentInput ] = useState(' ');
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todosList") || "[]"));

  const handleActiveFilter =(e) => {
    setSelectedFilter((filter) => `${e.target.textContent}`)
  }

  const onChangeHandler = (event) => {
    setCurrentInput(event.target.value)
  }

  const onKeyPressHandler  = (event)  => {
    if(event.key === 'Enter') {
      onSubmit(event)
      }
    }
  
  const onSubmit = (event) => {
    event.preventDefault()
    if(currentInput !== '') {
      const updateTodos = [...todos];
      const newTodo = {
        id:  updateTodos.length + 1 + Math.floor(Math.random()*999),
        title : currentInput,
        completed : false
      };
      updateTodos.push(newTodo);
      localStorage.setItem("todosList", JSON.stringify(updateTodos));
      setTodos(updateTodos)
    }
    setCurrentInput('')
  }
  

  const updateCheck = (id) => {
      let _todosCopy = todos.map((task) => {
         if(task.id === id) {
          task.completed = !task.completed;
        }
        return task;
    })
    localStorage.setItem("todosList", JSON.stringify(_todosCopy))
    setTodos(oldTodos => _todosCopy)
  }

  const deleteSingleTask = (id) => {
    let _todosCopy = todos.filter( (task) => task.id !== id);
    localStorage.setItem("todosList", JSON.stringify(_todosCopy))
    setTodos(oldTodos => _todosCopy)
  }

  const deleteAll = () => {
    let _todosCopy = todos.filter((task) => !task.completed);
    localStorage.clear("todosList")
    setTodos(oldTods => _todosCopy)
  }

  return (
    <main>
      <Filter 
        setActive = {handleActiveFilter}
        setFilter = {selectedFilter}
      />
    {selectedFilter  != 'Completed' && 
    (<form className= "inputTaskWrapper">
    <InputField
      inputType = "text"
      inputUse ="add_task"
      value =  {currentInput}
      onKeyPress= {onKeyPressHandler}
      onChange = {onChangeHandler}
      placeholder = "add details"
      name = "todos"
       />

      <Button
      buttonText = "Add"
      buttonType = "primary_button" 
      onClick = {(event)=> onSubmit(event)}
      />
      </form>
      )}

    { todos ? 
      (<TodoList
      todos = {todos}
      setFilter = {selectedFilter}
      updateCheckbox = {updateCheck}
      deleteTask = {deleteSingleTask}
      />) : null }

      {selectedFilter === 'Completed' && (
        <Button
        buttonText= 'delete all'
        buttonType = 'secondary_button'
        onClick = {deleteAll}
         />
      )}

    </main>
  )
}

export default Main;