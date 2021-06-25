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
      return 'Jones Local'
    },
    createdAt() {
      return 51;
    },
    img() {
      return "http://placekitten.com/300/300"
    },
    id() {
      return 32
    }
  },
  pets: {
    owner: {
      age() {
        return 15
      },
      id() {
        return 123
      }
    },
    id() {
      return 234
    },
    type() {
      return 'DOG'
    },
    name() {
      return 'Jimmy Local'
    },
    img() {
      return "http://placekitten.com/300/300"
    }
  }
}

const client = {
  url,
  resolvers
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AtomiProvider client={client}>
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
