import {ActionType} from '../../types/action/action';
import {AuthorizationStatus} from '../../configs/auth-status';
import {Film, Films, GenreName} from '../../types/films';
import {Comments} from '../../types/comment';
import {filterFilmsByGenre} from '../../utils/films';
import {FILM_PER_PAGE} from '../film-per-page';
import {AppRoute} from '../../configs/routes';
import {UserInfo, UserInfoError} from '../../types/user-info';

export const setDataLoaded = (payload: boolean) => ({
  type: ActionType.SetDataLoaded,
  payload,
} as const);

export const changeGenre = (payload: GenreName) => ({
  type: ActionType.ChangeGenre,
  payload,
} as const);

export const setGenres = (payload: Array<GenreName>) => ({
  type: ActionType.SetGenres,
  payload,
} as const);

export const setFilmsByPage = (payload: Films) => ({
  type: ActionType.SetFilmsByPage,
  payload,
} as const);

export const getFilmsByGenre = (films: Films, genre: GenreName, currentPage: number) => ({
  type: ActionType.GetFilmsByGenre,
  payload: filterFilmsByGenre(films, genre).slice(0, currentPage * FILM_PER_PAGE),
} as const);

export const setLoadMoreFilms = (currentPage: number) => ({
  type: ActionType.SetLoadMoreFilms,
  payload: currentPage + 1,
} as const);

export const resetFilms = () => ({
  type: ActionType.ResetFilms,
} as const);

export const setFilms = (payload: Films) => ({
  type: ActionType.SetFilms,
  payload,
} as const);

export const loadFavoriteFilms = (payload: Films) => ({
  type: ActionType.LoadFavoriteFilms,
  payload,
} as const);

export const setIsFavoriteLoading = (payload: boolean) => ({
  type: ActionType.SetIsFavoriteLoading,
  payload,
} as const);

export const setIsPromoFavoriteLoading = (payload: boolean) => ({
  type: ActionType.SetIsPromoFavoriteLoading,
  payload,
} as const);

export const requireAuthorization = (payload: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const userLoginError = (payload: UserInfoError) => ({
  type: ActionType.UserLoginError,
  payload,
} as const);

export const redirectToRoute = (payload: AppRoute | string) => ({
  type: ActionType.RedirectToRoute,
  payload,
} as const);

export const redirectTo404 = () => ({
  type: ActionType.RedirectTo404,
} as const);

export const loadUserInfo = (payload: UserInfo) => ({
  type: ActionType.LoadUserInfo,
  payload,
} as const);

export const loadPromoFilm = (payload: Film) => ({
  type: ActionType.LoadPromoFilm,
  payload,
} as const);

export const loadCurrentFilm = (payload: Film) => ({
  type: ActionType.LoadCurrentFilm,
  payload,
} as const);

export const loadSimilarFilms = (payload: Films) => ({
  type: ActionType.LoadSimilarFilms,
  payload,
} as const);

export const loadFilmComments = (payload: Comments) => ({
  type: ActionType.LoadFilmComments,
  payload,
} as const);

export const isCommentPosting = (payload: boolean) => ({
  type: ActionType.IsCommentPosting,
  payload,
} as const);
