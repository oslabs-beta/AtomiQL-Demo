import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import reportWebVitals from './reportWebVitals';
import { AtomiProvider } from 'atomiql';
import { BrowserRouter } from 'react-router-dom';

const url = 'http://localhost:4000';


const resolvers = {
  pet: {
    name() {
      return 'name local'
    }
  },
  pets: {
    name() {
      return 'array name local'
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AtomiProvider url={url} resolvers={resolvers}>
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
