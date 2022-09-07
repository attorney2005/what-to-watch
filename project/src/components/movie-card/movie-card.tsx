import {films} from "../../mocks/films";
import {Films} from "../../types/films";

type MovieCardProps = {
  films: Films;
}

function MovieCard(props:MovieCardProps): JSX.Element {
  const {films} = props;
  const {title, date, genres, id, src} = films;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
             alt= {films.title} width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {films.title}
        </a>
      </h3>
    </article>
    )
}

export default MovieCard
