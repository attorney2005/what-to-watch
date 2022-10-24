import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  GENRE_CHANGE: 'genre/genreChange',
  RESET_GENRE: 'genre/genreReset',
  ADD_FILMS: 'films/addFilms',
  RESET_FILMS: 'films/resetFilms',
  LOAD_FILMS: 'load/loadFilms',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGIN: 'user/login',
  LOGOUT: 'use/logout',
  REDIRECT_TO_ROUTE: 'app/redirectToRoute',
  LOAD_SELECTED_FILM: 'load/selectedFilm',
  LOAD_SIMILAR_FILMS: 'load/similarFilms',
  LOAD_REVIEWS: 'load/reviews',
  LOAD_FAVORITE_FILMS : 'load/favoriteFilms',
  LOAD_FAVORITE_FILM: 'load/favoriteFilm',
  LOAD_PROMO_FILM: 'load/promoFilm',
  REVIEW_IS_LOADING: 'review/isLoading',
};

export const genreChange = createAction(ActionType.GENRE_CHANGE, (genre) => ({
  payload: genre,
}));

export const resetGenre = createAction(ActionType.RESET_GENRE);

export const addFilms = createAction(ActionType.ADD_FILMS, (filmsListAmount) => ({
  payload: filmsListAmount,
}));

export const resetFilms = createAction(ActionType.RESET_FILMS);

export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({
  payload: films,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const submitLogout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const submitLogin = createAction(ActionType.LOGIN, (authData) => ({
  payload: authData,
}));

export const loadSelectedFilm = createAction(ActionType.LOAD_SELECTED_FILM, (film) => ({
  payload: film,
}));

export const loadSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS, (films) => ({
  payload: films,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadFavoriteFilms = createAction(ActionType.LOAD_FAVORITE_FILMS, (films) => ({
  payload: films,
}));

export const loadFavoriteFilm = createAction(ActionType.LOAD_FAVORITE_FILM, (film) => ({
  payload: film,
}));

export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (film) => ({
  payload: film,
}));

export const reviewIsLoading = createAction(ActionType.REVIEW_IS_LOADING, (isLoading) => ({
  payload: isLoading,
}));




