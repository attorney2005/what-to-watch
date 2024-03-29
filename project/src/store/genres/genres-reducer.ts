import {Actions, ActionType} from '../../types/action/action';
import {Genres} from '../../types/state';
import {ALL_GENRES_ITEM} from '../current-genre';

export const initialState: Genres = {
  currentGenre: ALL_GENRES_ITEM,
  genres: [],
};

const genresReducer = (state = initialState, action: Actions): Genres => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload};
    case ActionType.SetGenres:
      return {...state, genres: action.payload};
    default:
      return state;
  }
};

export {genresReducer};
