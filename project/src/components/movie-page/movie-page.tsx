import {Films} from "../../types/films";
import MoviesList from "../movies-list/movies-list";
import FilmTabs from "../film-tabs/film-tabs";
import FilmTabsOverview from "../film-tabs-overview/film-tabs-overview";
import FilmTabDetails from '../film-tab-details/film-tab-details'

type MoviePageProps = {
  films: Films;
}

function MoviePage(props: MoviePageProps): JSX.Element {
  const {films} = props;
  // const {title, date, genre, src} = films;
  const {director, rating, scoresCount, description, actors, runTime, genre, released, backgroundColor, isFavorite} =
    films;
  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt={films.title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{films.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{films.genre}</span>
                <span className="film-card__year">{films.date}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={films.src} alt={films.title} width="218"
                   height="327"/>
            </div>

            <div className="film-card__desc">
              <FilmTabs>
                <FilmTabsOverview
                  {...{
                    title: 'Overview',
                    rating,
                    scoresCount,
                    description,
                    director,
                    actors,
                  }}
                />
                <FilmTabDetails
                  {...{
                    title: 'Details',
                    director,
                    actors,
                    runTime,
                    genre: genres,
                    released,
                  }}
                />
                {/*<FilmTabsReviews title="Reviews" />*/}
              </FilmTabs>
              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
                  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>

                <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying
                  the
                  sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously,
                  Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

                <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>

                <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe
                  and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <MoviesList/>
          </div>
        </section>
      </div>
    </div>

  )
}

export default MoviePage
