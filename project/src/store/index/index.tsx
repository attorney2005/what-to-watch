import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from '../root-reducer';
import {createAPI} from '../../services/api';
import { AuthorizationStatus } from '../../components/const/const';
import { requireAuthorization } from '../actions/actions';
import {checkAuthAction, fetchFilmsAction} from '../api-actions';
import {ThunkAppDispatch} from "../../types/action/action";

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

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());


console.log(store.getState());
