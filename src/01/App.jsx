import React from 'react'
import TodosFooter from './components/todo-footer';
import TodosHeader from './components/todo-header';
import TodoItems from './components/todo-items';
import TodoForm from './components/todo-form';

const App = () => {
  return (
    <div className='container my-5 h-100'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">

            <TodosHeader />

            <TodoForm />

            <TodoItems />

            <TodosFooter />

          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
