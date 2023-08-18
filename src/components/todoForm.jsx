import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    let [value, setValue] = useState("");
    let [category, setCategory] = useState("");


    function handleSubmit(e){
        e.preventDefault()
        if(!value || !category){
            return;
        }else{
            addTodo(value,category);
            setValue="";
            setCategory=""
           
        }
    }


  return (
    <div className="todo-form">
        <hr></hr>
        <br></br>
        <h2>Criar tarefas</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' className="titulo" placeholder='Digite o titulo' value={value} onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudo">Estudo</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm