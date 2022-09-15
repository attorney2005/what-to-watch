import {films} from "../../mocks/films";

const movies = films;

function MoviesList(): JSX.Element {

  return (
    <>
      {movies.map(movie => (
          <article className="small-film-card catalog__films-card">
            <div className="small-film-card__image">
              <img src={movie.src}
                   alt={movie.title} width="280" height="175"
              />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">
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

