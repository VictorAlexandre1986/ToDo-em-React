
import React from 'react'

const todo = ({todo, removeTodo, completedTodo}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : "" }}>
            <div>
                <div className='content'>
                    <p>{todo.text}</p>
                </div>
                <div className="category">
                    <p>({todo.category})</p>
                </div>
            </div>
            <div className="">
              <button className="complete" onClick={()=> completedTodo(todo.id)}>Completar</button>
              <button className='remove' onClick={()=> removeTodo(todo.id)}>x</button>
            </div>
          </div>
  )
}

export default todo
