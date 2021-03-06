import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import reportWebVitals from './reportWebVitals';
import { AtomiProvider } from 'atomiql';
import { BrowserRouter } from 'react-router-dom';
import { resolvers } from './AtomiClient/resolvers';
import { typeDefs } from './AtomiClient/schema';

const url = 'http://localhost:4000';

const client = {
  url,
  resolvers,
  typeDefs
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
