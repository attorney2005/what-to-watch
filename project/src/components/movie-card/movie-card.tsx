import {films} from "../../mocks/films";
import {Films} from "../../types/films";

type MovieCardProps = {
  films: Films;
}

const movies = films;

function MovieCard(props:MovieCardProps): JSX.Element {
  const {films} = props;
  const {title, date, genres, id, src} = films;

  return (
    <>
    {movies.map (movie => (
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

export default MovieCard

