import { GENRES_MAX_AMOUNT } from '../const/const';
import {Films} from "../../types/films";
import {films} from "../../mocks/films";

interface GenresListProps {
  films: Films[],
  onGenreClick: void,
}

function Genres(props:GenresListProps) {
  const filmGenres = films.map((film) => film.genres);
  const filteredGenres = Array.from(new Set(filmGenres));
  filteredGenres.slice(0, GENRES_MAX_AMOUNT);
  filteredGenres.unshift('All genres');

  const activeGenreClassName = 'catalog__genres-item--active';

  return (
    <ul className="catalog__genres-list">
      {filteredGenres.map((filmGenre, i) => (
        <li className={`catalog__genres-item ${genres === filmGenre ? activeGenreClassName : ''}`} onClick={() => onGenreClick(filmGenre)} key={filmGenre + 1}>
          <span className="catalog__genres-link">{ filmGenre }</span>
        </li>),
      )}
    </ul>
  );
}

export default Genres
