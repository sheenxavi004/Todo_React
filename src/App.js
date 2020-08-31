import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, removeTodo })
{
  return(
    <div className="todo row justify-content-around">
      <div className="col align-self-center">{todo}</div>
      <button className="col-1 align-self-center btn btn-dark remove" onClick={() => removeTodo(index)}>-</button>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  function handleSubmit(e) 
  {
    e.preventDefault();
    if(!value)
      return;
    addTodo(value);
    setValue('')
  }
  return(
    <form className="form row" onSubmit={handleSubmit}>
      <input className="todoForm col-12" type="text" placeholder="Add a Todo" value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
}
function App() {
  const [todos, setTodo] = useState([
  ])

  function addTodo(text)
  {
    const newTodos = [...todos, text];
    setTodo(newTodos);
  }

  function removeTodo(index)
  {
    const newTodo = [...todos];
    newTodo.splice(index,1);
    setTodo(newTodo);
  }
  return (
    <div className="App">
      <div className="container">
      <h1 className="row">Todo</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} removeTodo={removeTodo}/>
        ))}
      </div>
    </div>
  );
}

export default App;
