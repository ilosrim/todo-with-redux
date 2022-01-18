import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const App = () => {

  const initailState = {
    value: 0
  }

  const reducer = (state = initailState, action) => {
    switch (action.type) {
      case 'incremented':
        return {
          ...state, value: state.value + 1,
        }
      case 'decremented':
        return {
          ...state, value: state.value - 1,
        }
      default:
        return state;
    }
  }

  let store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));
  store.subscribe(() => console.log(store.getState()))
  store.dispatch({ type: 'incremented' })
  store.dispatch({ type: 'incremented' })
  store.dispatch({ type: 'incremented' })
  store.dispatch({ type: 'decremented' })

  return (
    <div>

    </div>
  )
}

export default App
