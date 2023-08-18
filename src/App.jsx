import { useState } from 'react'

import './App.css';

import Todo from "./components/todo.jsx"
import TodoForm from './components/todoForm.jsx';
import Search from './components/search.jsx'
import Filter from './components/filter.jsx'





function App() {
  const [todos, setTodo] = useState([
    {id:1,
    text:"Criar funcionalidade no sistema ",
    category:"Trabalho",
    isCompleted: false
    },
    {id:2,
    text:"Estudar React ",
    category:"Estudo",
    isCompleted: false
    },
  ]);


  const [search, setSearch] = useState("");
  const [filtrar, setFiltrar] = useState("All");
  const [sort, setSort] = useState("Asc");



  const addTodo = (text, category) => {
    const newTodos = [...todos, 
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted:false
      },
  ];
    setTodo(newTodos);
  }


  const removeTodo = (id)=>{
    const newTodos = [...todos];
    const filteredTodo = newTodos.filter((todo)=>
      todo.id !== id ? todo : null
    );
    setTodo(filteredTodo);
  }


  const completedTodo = (id) =>{
    const newTodos = [...todos];
    newTodos.map((todo)=>
    todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );

    setTodo(newTodos);
  }


  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filtrar={filtrar} setFiltrar={setFiltrar} setSort={setSort}/>
      <div className="todo-list">
        {todos
        .filter((todo) => (filtrar == "All" ? true : filtrar == "Completed" ? todo.isCompleted : !todo.isCompleted))
        .filter((todo)=>(
          todo.text.toLowerCase().includes(search.toLowerCase())
        ))
        .sort((a,b) => 
          sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
        )
        .map((todo)=>(
            <Todo todo={todo} key={todo.key} removeTodo={removeTodo} completedTodo={completedTodo}/>          
        ))}
      </div>
          <TodoForm addTodo={addTodo}/>
    </div>

  )
}

export default App
