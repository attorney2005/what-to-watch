import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/app/app';
import {Provider, useSelector} from 'react-redux';
import {store} from './store/index';
import browserHistory from "./browser-history";
import HistoryRouter from '../src/components/history-route/history-route';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);

