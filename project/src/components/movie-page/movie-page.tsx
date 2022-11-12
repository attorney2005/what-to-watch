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
import {fetchCurrentFilmAction, fetchSimilarFilmsAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-authorization/selectores';
import {getCurrentFilm, getIsFavoriteLoading, getSimilarFilms} from '../../store/current-film/selectors';
import IconPlay from '../../components/icon-play/icon-play';
import IconInList from '../../components/icon-inlist/icon-inlist';
import IconAdd from '../../components/icon-add/icon-add';
import {postFavoriteFilm} from '../../store/api-actions';

function MoviePage(): JSX.Element {
  const currentFilm = useSelector(getCurrentFilm);
  const isFavoriteLoading = useSelector(getIsFavoriteLoading);
  const similarFilms = useSelector(getSimilarFilms);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const {id: filmId} = useParams<{id: string}>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(filmId));
  }, [dispatch, filmId, isFavoriteLoading]);

  useEffect(() => {
    dispatch(fetchSimilarFilmsAction(filmId));
  }, [dispatch, filmId]);

  if (currentFilm === null) {
    return <LoadingScreen />;
  }
  const {director, rating, scoresCount, description, actors, runTime, genre, released, backgroundColor, isFavorite} =
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
      navigate.push(AppRoute.SignIn);
    }
  };

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt={currentFilm.title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.date}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={pathToFilmPlayer} className="btn btn--play film-card__button">
                  <IconPlay />
                </Link>
                <button
                  type="button"
                  className={clsx(['btn btn--list film-card__button', {'btn--loading': isFavoriteLoading}])}
                  onClick={handleFavoriteClick}
                >
                  {isFavorite ? <IconInList /> : <IconAdd />}
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
              <img src={currentFilm.src} alt={currentFilm.title} width="218"
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
            <MoviesList movies={similarFilms} />
          </div>
        </section>
      </div>
    </div>

  )
}

export default MoviePage
