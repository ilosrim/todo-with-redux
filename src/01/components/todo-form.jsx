import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../actions/todos';

const TodoForm = () => {

  const inputRef = useRef(null);
  const formRef = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      id: uuidv4(),
      title: inputRef.current.value,
      isDone: false,
    }));
    formRef.current.reset();
  }

  return (
    <div className="card-body">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="form-group d-flex justify-content-between align-items-center">
        <div>
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="e.g. Buy eggs"
          />
        </div>
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  )
}

export default TodoForm
