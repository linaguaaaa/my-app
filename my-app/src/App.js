// import React, { useState } from 'react'; function App() { const [todos, setTodos] = useState([]); const [input, setInput] = useState(''); const addTodo = () => { if (input.trim()) { setTodos([...todos, input]); setInput(''); } }; const deleteTodo = (index) => { setTodos(todos.filter((todo, i) => i !== index)); }; return ( <div className="App"> <h1>To-Do List</h1> <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new task..." /> <button onClick={addTodo}>Add</button> <ul> {todos.map((todo, index) => ( <li key={index}> {todo} <button onClick={() => deleteTodo(index)}>Delete</button> </li> ))} </ul> </div> ); } export default App;


import React from 'react';
 function App() 
 { return (
   <div className="App">
   <h1>Hello, world!</h1> 
   </div> ); 
   }
    export default App;



    