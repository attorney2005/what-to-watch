import {useDispatch, useSelector} from 'react-redux';
import MoviesList from '../movies-list/movies-list';
import Genres from '../genres-list/genres-list';
import {GenreName} from '../../types/films';
import {getFilms, getFilteredFilms,getCurrentPage} from '../../store/catalog-films/selectors';
import {getCurrentGenre, getGenres} from '../../store/genres/selectors';
import {changeGenre, getFilmsByGenre, setLoadMoreFilms} from '../../store/actions/actions';
import {filterFilmsByGenre} from '../../utils/films';
import ShowMoreButton from '../show-more-button/show-more-button';


function MainScreen(): JSX.Element {
  const films = useSelector(getFilms);
  const filteredFilms = useSelector(getFilteredFilms);
  const currentPage = useSelector(getCurrentPage);
  const genres = useSelector(getGenres);
  const currentGenre = useSelector(getCurrentGenre);

  const dispatch = useDispatch();

  const allFilteredFilms = filterFilmsByGenre(films, currentGenre);

  const handleGenreClick = (genre: GenreName) => {
    dispatch(setLoadMoreFilms(0));
    dispatch(changeGenre(genre));
    dispatch(getFilmsByGenre(films, genre, 1));
  };

  const onShowMoreButtonClick = () => {
    dispatch(setLoadMoreFilms(currentPage));
    dispatch(getFilmsByGenre(films, currentGenre, currentPage + 1));
  };

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
          <Genres films={films} genres={genres} currentGenre={currentGenre} handleGenreClick={handleGenreClick}/>
          <div className="catalog__films-list">
            <MoviesList movies={filteredFilms}/>
          </div>
          <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick}/>
        </section>
      </div>
    </div>
  );
}

export default MainScreen;

