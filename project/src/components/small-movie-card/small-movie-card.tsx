import {useState} from 'react';
import {Link} from 'react-router-dom';
import Player from '../video-player/video-player';
import {AppRoute} from '../const/const';
import {Films} from '../../types/films';
import VideoPlayer from "../video-player/video-player";

type SmallMovieCardProps = {
  films: Films;
  isPlaying: boolean;
}


function SmallMovieCard(props: SmallMovieCardProps): JSX.Element {
  const {
    films,
  } = props;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
      <Link
        className="small-film-card__link"
        to={`${AppRoute.Film}/${films.id}`}
      >
        <div
          className="small-film-card__image"
        >
          {!isPlaying
            ? <img src={films.src} alt={films.title} width="280" height="175" />
            : <VideoPlayer films={films} key={films.id} src={films.preview} isPlaying={isPlaying}/>}
        </div>
        <h3
          className="small-film-card__title"
        >
          {films.title}
        </h3>
      </Link>
    </article>
  );
}

export default SmallMovieCard;
