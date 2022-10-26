import MoviesList from '../movies-list/movies-list';
import {Films} from '../../types/films';
import {films} from "../../mocks/films";
import Genres from "../genres-list/genres-list";



interface MainScreenProps {
  films: Films[],
  genre: string,
  onGenreClick (genre: string): void,
}
function MainScreen(props:MainScreenProps): JSX.Element {
  const { genre, onGenreClick} = props;

  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
                height="327"
              />
            </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {/*<ul className="catalog__genres-list">*/}
          {/*  <li className="catalog__genres-item catalog__genres-item--active">*/}
          {/*    <a href="#" className="catalog__genres-link">{films.genre}</a>*/}
          {/*  </li>*/}
          {/*</ul>*/}

          <Genres films={films} genre={genre} onGenreClick={onGenreClick}/>
          <div className="catalog__films-list">
            <MoviesList/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainScreen;

