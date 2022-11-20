import {generatePath} from 'react-router-dom';
import {
  setDataLoaded,
  setFilms,
  setIsFavoriteLoading,
  setIsPromoFavoriteLoading,
  // loadFavoriteFilms,
  setGenres,
  setFilmsByPage,
  // loadPromoFilm,
  loadCurrentFilm,
  loadSimilarFilms,
  // loadFilmComments,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  loadUserInfo,
  userLoginError,
  isCommentPosting
} from './actions/actions';
import {APIRoute, AppRoute} from '../configs/routes';
import {ThunkActionResult} from '../types/action/action';
import {createClientFilm} from '../services/adapters';
import {AuthorizationStatus} from '../configs/auth-status';
import {getGenres} from '../utils/film';
import {FILM_PER_PAGE} from './film-per-page';
import {AuthData} from '../types/auth-data';
import {dropToken, saveToken, Token} from '../services/token';
import {adaptAuthInfoToClient} from '../services/adapters';
import {UserInfo} from '../types/user-info';
import {toast} from 'react-toastify';
import {Film} from '../types/films';
import {CommmentPost} from '../types/comment';
import {CommentMessage} from '../types/comment-message';
import {AuthMessage} from '../types/auth-message';
import {DataMessage} from '../types/data-message';

const TOAST_AUTOCLOSE_TIMEOUT = 3000;

export const fetchFilmsAction = (): ThunkActionResult => {
  return async (dispatch, _getState, api) => {
    const apiResponse = await api.get(APIRoute.Films);
    const serverFilms = apiResponse.data;
    const clientFilms = serverFilms.map(createClientFilm);
    const genres = getGenres(clientFilms);
    const firstPageFilms = clientFilms.slice(0, FILM_PER_PAGE);

    dispatch(setFilms(clientFilms));
    dispatch(setGenres(genres));
    dispatch(setFilmsByPage(firstPageFilms));
    dispatch(setDataLoaded(true));
  };
}


// export const fetchFavoriteFilmsAction = (): ThunkActionResult =>
//   async (dispatch, _getState, api): Promise<void> => {
//     try {
//       const {data: favoriteFilms} = await api.get(APIRoute.Favorite);
//       const filmsData = favoriteFilms.map(createClientFilm);
//
//       dispatch(loadFavoriteFilms(filmsData));
//     } catch (error) {
//       toast.error(DataMessage.FavoriteFilmsFailed);
//     }
//   };

// export const fetchPromoFilmAction = (): ThunkActionResult =>
//   async (dispatch, _getState, api): Promise<void> => {
//     const {data} = await api.get(APIRoute.Promo);
//     const promoFilmData = createClientFilm(data);
//
//     dispatch(loadPromoFilm(promoFilmData));
//   };

export const fetchCurrentFilmAction = (id: number | string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const filmPath = generatePath(APIRoute.Film, {
        id: Number(id),
      });
      const {data: serverCurrentFilm} = await api.get(filmPath);
      const filmData = createClientFilm(serverCurrentFilm);

      dispatch(loadCurrentFilm(filmData));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  };

export const fetchSimilarFilmsAction = (id: number | string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const filmSimilarPath = generatePath(APIRoute.SimilarFilms, {
        id: Number(id),
      });
      const {data: serverSimilarFilms} = await api.get(filmSimilarPath);
      const filteredFilmsData = serverSimilarFilms.filter((film: Film) => film.id !== id);
      const filmsData = filteredFilmsData.map(createClientFilm);

      dispatch(loadSimilarFilms(filmsData));
    } catch (error) {
      toast.error(DataMessage.SimilarFilmsFailed);
    }
  };

// export const fetchFilmCommentsAction = (id: number | string): ThunkActionResult =>
//   async (dispatch, _getState, api): Promise<void> => {
//     try {
//       const filmPath = generatePath(APIRoute.FilmComments, {
//         id: Number(id),
//       });
//       const {data: serverFilmComments} = await api.get(filmPath);
//
//       dispatch(loadFilmComments(serverFilmComments));
//     } catch (error) {
//       toast.error(DataMessage.FilmCommentsFailed);
//     }
//   };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get(APIRoute.Login);
      const {data: serverAuthInfo} = response;
      const {id, email, name, avatarUrl, token} = adaptAuthInfoToClient(serverAuthInfo);
      const userInfo: UserInfo = {id, email, name, avatarUrl};

      saveToken(token);

      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(loadUserInfo(userInfo));
    } catch (error) {
      toast.error(AuthMessage.FailSigned);
    }
  };

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.post(APIRoute.Login, {email, password});
      const {data: serverAuthInfo} = response;
      const {id, email: userEmail, name, avatarUrl, token} = adaptAuthInfoToClient(serverAuthInfo);
      const userInfo: UserInfo = {id, email: userEmail, name, avatarUrl};

      saveToken(token);

      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(loadUserInfo(userInfo));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(userLoginError(AuthMessage.FailEmail));
      } else {
        toast.error(AuthMessage.FailUnknown);
      }
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export const postFilmComment = (id: string, payload: CommmentPost): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const postCommentPath = generatePath(APIRoute.PostComment, {id});
    const filmPath = generatePath(AppRoute.Film, {id});

    dispatch(isCommentPosting(true));
    toast.info(CommentMessage.PostProcess);

    try {
      await api.post<{token: Token}>(postCommentPath, payload);

      toast.dismiss();
      toast.success(CommentMessage.PostSuccess, {autoClose: TOAST_AUTOCLOSE_TIMEOUT});

      setTimeout(() => {
        dispatch(redirectToRoute(filmPath));
      }, TOAST_AUTOCLOSE_TIMEOUT);
      dispatch(isCommentPosting(false));

    } catch (error) {
      toast.dismiss();
      toast.error(CommentMessage.PostFail);
      dispatch(isCommentPosting(false));
    }
  };

export const postFavoriteFilm = (id: number | string, isFavorite: boolean): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const status = Number(!isFavorite);
    const postFavoritePath = generatePath(APIRoute.PostFavorite, {
      id: Number(id),
      status,
    });
    dispatch(setIsFavoriteLoading(true));

    try {
      await api.post<{token: Token}>(postFavoritePath);
      dispatch(setIsFavoriteLoading(false));
    } catch (error) {
      dispatch(setIsFavoriteLoading(false));
    }
  };

export const postPromoFavoriteFilm = (id: number, isFavorite: boolean): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const status = Number(!isFavorite);
    const postFavoritePath = generatePath(APIRoute.PostFavorite, {id, status});
    dispatch(setIsPromoFavoriteLoading(true));

    try {
      await api.post<{token: Token}>(postFavoritePath);
      dispatch(setIsPromoFavoriteLoading(false));
    } catch (error) {
      dispatch(setIsPromoFavoriteLoading(false));
    }
  };
