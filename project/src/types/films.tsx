export enum Genre {
  'All genres',
  'Comedy',
  'Crime',
  'Adventure',
  'Mystery',
  'History',
  'Drama',
  'Fantasy',
}
export type GenreName = keyof typeof Genre;

export type Film = {
  title:string;
  genre: string;
  date: number;
  id: number;
  background:string;
  poster: string,
  src: string;
  preview: string,
  rating: number;
  backgroundColor: string,
  scoresCount: number,
  description: string,
  director: string,
  actors: string,
  runTime: number,
  released: number,
};

export type Films = Film[];

export interface ServerFilm {
  id: number;
  name: string;
  'poster_image': string;
  'preview_image': string;
  'background_image': string;
  'background_color': string;
  'video_link': string;
  'preview_video_link': string;
  description: string;
  rating: number;
  'scores_count': number;
  director: string;
  starring: string[];
  'run_time': number;
  genre: GenreName;
  released: number;
  'is_favorite': boolean;
}
