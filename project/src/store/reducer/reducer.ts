import {createReducer} from '@reduxjs/toolkit';
import {ALL_GENRES, SHOWN_MOVIES  } from '../../components/const/const';
import {
  genreChange,
  resetGenre,
  addFilms,
  resetFilms,
  loadFilms,
  loadSelectedFilm,
  loadSimilarFilms,
  loadFavoriteFilms,
  loadPromoFilm
} from '../actions/actions';

const firstGenre = ALL_GENRES;
const filmsListAmount = SHOWN_MOVIES ;

const initialState = {
  genre: firstGenre,
  films: [],
  filmsListAmount: filmsListAmount,
  isDataLoaded: false,
  selectedFilm: [],
  isSelectedFilmLoaded: false,
  similarFilms: [],
  favoriteFilms: [],
  isFavoriteFilmsLoaded: false,
  promoFilm: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(genreChange, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(resetGenre, (state) => {
      state.genre = firstGenre;
    })
    .addCase(addFilms, (state, action) => {
      state.filmsListAmount = action.payload + SHOWN_MOVIES ;
    })
    .addCase(resetFilms, (state) => {
      state.filmsListAmount = SHOWN_MOVIES ;
    })
    // .addCase(loadFilms, (state, action) => {
    //   state.films = useFilmsAdapter(action.payload);
    //   state.isDataLoaded = true;
    // })
    // .addCase(loadSelectedFilm, (state, action) => {
    //   state.selectedFilm = useSelectedFilmAdapter(action.payload);
    //   state.isSelectedFilmLoaded = true;
    // })
    // .addCase(loadSimilarFilms, (state, action) => {
    //   state.similarFilms = useFilmsAdapter(action.payload);
    // })
    // .addCase(loadFavoriteFilms, (state, action) => {
    //   state.favoriteFilms = useFilmsAdapter(action.payload);
    //   state.isFavoriteFilmsLoaded = true;
    // })
    // .addCase(loadPromoFilm, (state, action) => {
    //   state.promoFilm = useSelectedFilmAdapter(action.payload);
    // });
});

export {reducer};
