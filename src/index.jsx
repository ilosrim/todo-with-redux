import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './01/App';
import { store } from './01/configStore'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
