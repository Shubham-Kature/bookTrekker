import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import { BooksContextProvider } from './context/booksDataContext';
import { BookInfoProvider } from './context/bookInfoContext';

const client = new ApolloClient({
  uri: 'https://bestsellers-production.up.railway.app/',
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <BooksContextProvider>
        <BookInfoProvider>
          <App />
        </BookInfoProvider>
      </BooksContextProvider>
    </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
