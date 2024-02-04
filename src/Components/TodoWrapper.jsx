import React, {useState} from 'react'
import { TodoForm } from './todoForm';
import {v4 as uuidv4} from 'uuid';
uuidv4(); //generate unique identifiers for every todo object
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

/*Serves as a container to manage the list of todo items
striking them out, editing them and deleting them
 */



 const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    /* takes a todo item and adds to to the array, gives it an id, the take propety 
    holds what the user enters, it is used later to render the todo item(what the user entered)
    ,sets item to not bein edited and adds to todo object the back of the array, */
     

    /*NOTE : the take and the id function are not being passed down to the child function 
    but what is happening is the the child compoennt is being created
    WITH the take and id prop */
const addTodo = (todo) => { //used to add a new todo itme to the list
    setTodos([...todos, {id: uuidv4(), task : todo, // the variable name afte the ... has to the match the state declariation above
    completed: false, isEditing: false}])
    console.log(todos)
}

/*the reason why we use map is because in react we want treat states as 
if you are unable to change them so we went to make new copies of the state
using the map, it checks the id of the todo object we click on to check 
and see if it matches the one we are looking for,  */
const toggleComplete = (id) => { // used to toggle the complete propety boolean
    setTodos( // we are calling setTodos because we are creating a new state
      todos.map((todo) => 
        todo.id === id ? { ...todo, completed : !todo.completed } : todo
      ) /* basically it checks if the id marhces, if it matches, will set
      the competed with the oppsite, '!todo.complete'  
      or if will set the same with 'todo'*/
    );
  }

  const deleteTodo = id => setTodos(todos.filter((todo) => todo.id !==  id));

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      ) // this syntax copies all properties from the current todo and 
        //and toggles the isEditing boolean
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      ) //By placing task after { ...todo } in the object literal, 
        //it ensures that the original task value is replaced with the new one.
    );
  };
  
  

  

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTask={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

/*NOTE: simply defining the toggleComplete function in this paretn compoennt
does not give the child component, Todo, acess to use, the todo child component
has acess to the toggle funciton because we passed it down to it here */

/*  <Todo task={todo} key={index}
    toggleComplete={toggleComplete}/> 
    ))} 
    Here we passed a task,  a key and the toggleComplete function with
    the same prop name down to the todo funtion we passed the take prop 
    down to the todo function in the todoorm file. 

    NOTE: EVEN IF WE PASSED THE TASK AND TOGGLECOMPLETE FUNCTION
    TO THE TODO COMPONENT, WE HAVE STILL HAVE TO SET TASK AND TOGGLECOMPLETE
    AS PAREMTERS IN ORDER TO HAVE ACESS TO IT IN THE CHILD COMPONENT
     */
export default TodoWrapper;