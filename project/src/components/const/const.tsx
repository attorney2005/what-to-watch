export const ERROR_MESSAGE = `Sorry, your browser doesn't support embedded videos.`;
export const ALL_GENRES = `All genres`;
export const TEXTAREA_COLOR = `rgba(255, 255, 255, 0.3)`;
export const RATINGS_QUANTITY = 5;
export const SHOWN_MOVIES = 8;
export const MAX_SHOWN_MOVIES_LIKE_THIS = 4;

export enum AppRoute {
  Main = '/main',
  Sign_in = '/login',
  MyList = '/my_list',
  Film = '/films/:id',
  Add_Review = '/films/:id/review',
  Player = '/player/:id',
  Card = '/card/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Review {
  MIN_LENGTH = 50,
  MAX_LENGTH = 400,
}

export const reviewSubmitButton: {
  [key: string]: string;
} = {
  post: `Post`,
  sending: `Sending...`,
};


