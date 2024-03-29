import clsx from 'clsx';
import {Link, generatePath, useParams, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import MoviesList from '../movies-list/movies-list';
import FilmTabs from '../film-tabs/film-tabs';
import FilmTabsOverview from '../film-tabs-overview/film-tabs-overview';
import FilmTabDetails from '../film-tab-details/film-tab-details';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute} from '../../configs/routes';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {AuthorizationStatus} from '../../configs/auth-status';
import {fetchCurrentFilmAction, fetchSimilarFilmsAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-authorization/selectores';
import {getCurrentFilm, getIsFavoriteLoading, getSimilarFilms} from '../../store/current-film/selectors';
import IconPlay from '../../components/icon-play/icon-play';
import IconInList from '../../components/icon-inlist/icon-inlist';
import IconAdd from '../../components/icon-add/icon-add';
import {postFavoriteFilm} from '../../store/api-actions';
import {FilmTabReviews} from '../film-tab-reviews/film-tab-reviews';

function MoviePage(): JSX.Element {
  const currentFilm = useSelector(getCurrentFilm);
  const isFavoriteLoading = useSelector(getIsFavoriteLoading);
  const similarFilms = useSelector(getSimilarFilms);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const {id: filmId} = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(filmId));
  }, [dispatch, filmId, isFavoriteLoading]);

  useEffect(() => {
    dispatch(fetchSimilarFilmsAction(filmId));
  }, [dispatch, filmId]);

  if (currentFilm === null) {
    return <LoadingScreen/>;
  }
  const {director, rating, scoresCount, description, starring, runTime, genre, released, backgroundColor, isFavorite} =
    currentFilm;

  const pathToFilmPlayer = generatePath(AppRoute.Player, {
    id: currentFilm.id,
  });

  const pathToAddReview = generatePath(AppRoute.AddReview, {
    id: currentFilm.id,
  });

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const handleFavoriteClick = () => {
    if (isAuthorized) {
      dispatch(postFavoriteFilm(filmId, isFavorite));
    } else {
      navigate(AppRoute.SignIn);
    }
  };

  return (
    <div>
      <section className="film-card film-card--full"
        style={{backgroundColor: backgroundColor}}
        data-testid="Single Film"
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={pathToFilmPlayer} className="btn btn--play film-card__button">
                  <IconPlay/>
                </Link>
                <button
                  type="button"
                  className={clsx(['btn btn--list film-card__button', {'btn--loading': isFavoriteLoading}])}
                  onClick={handleFavoriteClick}
                >
                  {isFavorite ? <IconInList/> : <IconAdd/>}
                </button>
                {isAuthorized && (
                  <Link to={pathToAddReview} className="btn film-card__button">
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.posterImage} alt={currentFilm.name} width="218"
                height="327"
              />
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
                    actors: starring,
                  }}
                />
                <FilmTabDetails
                  {...{
                    title: 'Details',
                    director,
                    actors: starring,
                    runTime,
                    genre,
                    released,
                  }}
                />
                <FilmTabReviews title="Reviews" />
              </FilmTabs>
              <div className="film-rating">
                <div className="film-rating__score">{currentFilm.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{currentFilm.scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{currentFilm.description}</p>
                <p className="film-card__director">
                  <strong>Director: {currentFilm.director}</strong>
                </p>
                <p className="film-card__starring">
                  <strong>Starring: {currentFilm.starring}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <MoviesList movies={similarFilms}/>
          </div>
        </section>
      </div>
    </div>

  );
}

export default MoviePage;
