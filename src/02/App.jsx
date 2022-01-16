import React, { useReducer, useState } from 'react'


const App = () => {

  const [name, setName] = useState('');

  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          {
            id: Date.now(),
            name: action.payload.name,
            comleted: false
          }
        ]
      case 'toggle':
        return state.map(val => {
          if (val.id === action.payload.id) {
            return { ...val, comleted: !val.comleted }
          }
        })
      case 'delete':
        return state.filter(val => val.id !== action.payload.id)
      default:
        return state;
    }
  }
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = () => {
    dispatch({
      type: 'add',
      payload: {
        name: name,
      }
    });
    setName('');
  }

  return (
    <div className='container mt-5'>
      <div className="row justify-content-center">
        <div className="col-md-6"  >
          <div className="card">
            <div className="card-header d-flex alig-items-center justify-content-between">
              <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" />
              <button className="btn btn-success" onClick={handleSubmit}>Add</button>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {
                  todos.map((value) => {
                    return (
                      <div key={value.id} className='d-flex alig-items-center justify-content-between'>
                        <li
                          key={value.id}
                          className='list-group-item w-50'
                          style={{ color: value.comleted ? 'red' : 'blue' }}
                        >
                          {value.name}
                        </li>
                        <div>
                          <button
                            onClick={() => dispatch({ type: 'toggle', payload: { id: value.id } })}
                            className="btn btn-secondary me-2"
                          >
                            Toggle
                          </button>
                          <button
                            onClick={() => dispatch({ type: 'delete', payload: { id: value.id } })}
                            className="btn btn-danger">
                            Delete
                          </button>
                        </div>
                      </div>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
