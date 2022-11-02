import {StoreNameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Films} from '../../types/films';

export const getFilms = (state: State): Films => state[StoreNameSpace.Catalog].films;
export const getFilteredFilms = (state: State): Films => state[StoreNameSpace.Catalog].filteredFilms;
export const getCurrentPage = (state: State): number => state[StoreNameSpace.Catalog].currentPage;
export const getIsDataLoaded = (state: State): boolean => state[StoreNameSpace.Catalog].isDataLoaded;
