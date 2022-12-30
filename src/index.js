import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import { BooksContextProvider } from './context/booksDataContext';
import { MainBookContextProvider } from './context/mainBookContext';

const client = new ApolloClient({
  uri: 'https://bestsellers-production.up.railway.app/',
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <BooksContextProvider>
        <MainBookContextProvider>
            <App />
        </MainBookContextProvider>
      </BooksContextProvider>
    </React.StrictMode>
  </ApolloProvider>
);
