import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

/*REPRESENTS A SINGULAR TODO ITEM. 
IT HAS A COMPLETE AND INCOMPLETE STATUS AND EACH TODO 
ITEM HAS THE ABILITY TO EDIT AND THE ABILITY TO DELETE THE ITEM */

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => { 
  /* the reason why we pased task and toggle complete props as parameters
  is because so we hav acessess to using tasks and the toggle function
  the task prop allows use to call directly on the todo item and acess
  its data through "take"  we are able to use the toggleComplete function
  only because we passed it as the the Todo's paremerrrs */ 
    
  return (
    <div className='Todo'>
      
            <p className={`${task.completed ? "completed" : "incompleted"}`}
             onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div> 
        <FontAwesomeIcon icon={faPenToSquare} className='icon1'
        onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon icon={faTrash} className='icon2' 
            onClick={() => deleteTodo(task.id)}/> 
                
          
         </div>
    </div>
     
        /*    */
    
  )
}

