import {AuthorizationStatus} from '../configs/auth-status';
import {store} from '../store/index';
import {Film, Films, GenreName} from './films';
import {Comments} from './comment';
import {UserInfoError, UserInfo} from './user-info';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export type CatalogState = {
  films: Films;
  filteredFilms: Films;
  currentPage: number;
  isDataLoaded: boolean;
};

export type UserAuthorization = {
  authorizationStatus: AuthorizationStatus;
  userInfo: UserInfo;
  loginError: UserInfoError;
};

export type Genres = {
  currentGenre: GenreName;
  genres: Array<GenreName>;
}

export type FilmState = {
  currentFilm: Film | null;
  similarFilms: Films;
  filmComments: Comments;
  isCurrentFilmLoaded: boolean;
  isCommentPosting: boolean;
  isFavoriteLoading: boolean;
};

export type FavoriteFilmsState = {
  favoriteFilms: Films;
};

export type PromoFilmState = {
  promoFilm: Film | null;
  isPromoFavoriteLoading: boolean;
};

