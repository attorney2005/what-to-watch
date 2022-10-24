import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/app/app';
import {films} from "./mocks/films";
import {Provider} from 'react-redux';
import {store} from './store/index';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App
      films={films}
    />
    </Provider>
  </React.StrictMode>
);

