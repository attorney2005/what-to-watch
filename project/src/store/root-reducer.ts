import {combineReducers} from 'redux';
import {catalogFilmsReducer} from './catalog-films/catalog-films-reducer';
import {promoFilmReducer} from './promo-film/promo-film-reducer';
import {favoriteFilmsReducer} from './favorite-films/favorite-films-reducer';
import {currentFilmReducer} from './current-film/current-film-reducer';
import {userAuthorizationReducer} from './user-authorization/user-authorization-reducer';
import {genresReducer} from './genres/genres-reducer';

export enum StoreNameSpace {
  Catalog = 'CATALOG',
  Promo = 'PROMO',
  Favorite = 'FAVORITE',
  Current = 'CURRENT',
  User = 'USER',
  Genres = 'GENRES',
}

export const rootReducer = combineReducers({
  [StoreNameSpace.Catalog]: catalogFilmsReducer,
  [StoreNameSpace.Promo]: promoFilmReducer,
  [StoreNameSpace.Favorite]: favoriteFilmsReducer,
  [StoreNameSpace.Current]: currentFilmReducer,
  [StoreNameSpace.User]: userAuthorizationReducer,
  [StoreNameSpace.Genres]: genresReducer,
});

