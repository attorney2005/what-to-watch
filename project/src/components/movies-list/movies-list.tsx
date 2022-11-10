import {films} from '../../mocks/films';
import {Films} from "../../types/films";

// const movies = films;
type MoviesListProps = {
  movies: Films
}
function MoviesList({movies}:MoviesListProps): JSX.Element {

  return (
    <>
      {movies.map(movie => (
        <article className="small-film-card catalog__films-card" key={movie.id}>
          <div className="small-film-card__image">
            <img src={movie.src}
              alt={movie.title} width="280" height="175"
              />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link">
                {movie.title}
              </a>
            </h3>
          </article>
        )
      )
      }
    </>
  )
}

export default MoviesList

