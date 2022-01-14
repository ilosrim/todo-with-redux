import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './todo-item'

const TodoItems = () => {

  const todos = useSelector(state => state.todos);
  console.log(todos);

  return (
    <ul className="list-group">
      {
        todos.length > 0 ? todos.map(item => (
          <TodoItem title={item.title} id={item.id} key={item.id} />
        )) : (
          <h3 className='text-center mt-2'>Hech narsa yo'q</h3>
        )
      }
    </ul>
  )
}

export default TodoItems
