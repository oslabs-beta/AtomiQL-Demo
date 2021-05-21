import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import reportWebVitals from './reportWebVitals';
import { AtomiProvider } from 'typescript-package';
import { BrowserRouter } from 'react-router-dom';

const url = 'http://localhost:4000';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AtomiProvider url={url}>
        <App />
      </AtomiProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
