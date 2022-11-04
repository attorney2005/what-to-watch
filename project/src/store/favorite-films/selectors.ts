import {StoreNameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Films} from '../../types/films';

export const getFavoriteFilms = (state: State): Films => state[StoreNameSpace.Favorite].favoriteFilms;
