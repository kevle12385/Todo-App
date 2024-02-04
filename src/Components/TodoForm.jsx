import React, {useState} from 'react'


export const TodoForm = ({addTodo}) => {
const [value, setValue] = useState("")

const handleSubmit = e => { 
  e.preventDefault();  // e.preventDefault is a function that when we press submits prevents us from reloading the page

  addTodo(value); 
  setValue('');
}



  return (

                    //when we press submit, on submit, 
                    //we handle the reloading witht he handle submit function
                    //the value
                    //onchange() updates the value
    <form className='TodoForm' onSubmit={handleSubmit}> 
      <input type='text' className='todoInput' value= {value}
      placeholder='Add-Text' onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='todo-button'>Add Task</button>
    </form>
  )
}
