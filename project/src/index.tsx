import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MovieInform =
  {
    title: 'The Grand Budapest Hotel',
    date: 2014,
    genres: 'Drama',
  }

ReactDOM.render(
  <React.StrictMode>
    <App
    title = {MovieInform.title}
    date = {MovieInform.date}
    genres = {MovieInform.genres}
    />
  </React.StrictMode>,
  document.getElementById('root'));
