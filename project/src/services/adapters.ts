import {Film, ServerFilm} from '../types/films';
import {AuthInfo, ServerAuthInfo} from '../types/user-info';

export const createClientFilm = (serverFilm: ServerFilm): Film => ({
  id: serverFilm.id,
  name: serverFilm.name,
  posterImage: serverFilm.posterImage,
  previewImage: serverFilm.previewImage,
  backgroundImage: serverFilm.backgroundImage,
  backgroundColor: serverFilm.backgroundColor,
  videoLink: serverFilm.videoLink,
  previewVideoLink: serverFilm.previewVideoLink,
  description: serverFilm.description,
  rating: serverFilm.rating,
  scoresCount: serverFilm.scoresCount,
  director: serverFilm.director,
  starring: serverFilm.starring,
  runTime: serverFilm.runTime,
  genre: serverFilm.genre,
  released: serverFilm.released,
  isFavorite: serverFilm.isFavorite,
});

export const adaptAuthInfoToClient = (authInfo: ServerAuthInfo): AuthInfo => ({
  id: authInfo['id'],
  email: authInfo['email'],
  name: authInfo['name'],
  avatarUrl: authInfo['avatar_url'],
  token: authInfo['token'],
});
