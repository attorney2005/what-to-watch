import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from '../root-reducer';
import {createAPI} from '../../services/api';
import { AuthorizationStatus } from '../../components/const/const';
import { requireAuthorization } from '../actions/actions';
import {checkAuthAction, fetchFilmsAction} from '../api-actions';

const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),

});

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());


console.log(store.getState());
