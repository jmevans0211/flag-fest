import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css';

const router = (
  <BrowserRouter>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));

