import { useDispatch } from "react-redux"
import { removeTodo } from "../actions/todos"

const TodoItem = ({ title, id }) => {

  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input type="checkbox" className="form-check-input me-2" />
        <label htmlFor="checkbox">{title}</label>
      </div>
      <button className="btn btn-danger" onClick={() => dispatch(removeTodo(id))}>Remove</button>
    </li>
  )
}

export default TodoItem
