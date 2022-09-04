export enum AppRoute {
  Main = '/main',
  Sign_in = '/login',
  MyList = '/my_list',
  Film = '/films/:id',
  Add_Review = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
