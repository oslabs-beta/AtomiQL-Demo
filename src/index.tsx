import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import reportWebVitals from './reportWebVitals';
import { AtomiProvider } from 'atomiql';
import { BrowserRouter } from 'react-router-dom';
import { gql } from 'graphql-request';


const url = 'http://localhost:4000';

// !CHECK! added typeDefs and resolvers so we can send to provider
const typeDefs: any = gql`
  extend type User {
    age: Int
  }
  extend type Pet {
    vaccinated: Boolean!
  }
`
const resolvers: any = {
  User: {
    age() {
      return 35
    }
  },
  Pet: {
    vaccinated() {
      return true
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AtomiProvider url={url} resolvers={resolvers} typeDefs={typeDefs}>
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
