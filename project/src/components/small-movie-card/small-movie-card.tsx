import React from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {AppRoute} from '../const/const';
import {Films} from '../../types/films';

type SmallMovieCardProps = {
  films: Films;
  isPlaying: boolean;
  onSmallMovieCardMouseEnter(): void;

  onSmallMovieCardMouseOut(): void;
}

function SmallMovieCard(props: SmallMovieCardProps): JSX.Element {
  const {
    films,
    isPlaying,
    onSmallMovieCardMouseEnter,
    onSmallMovieCardMouseOut,
  } = props;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        onSmallMovieCardMouseEnter();
      }}
      onMouseOut={() => {
        onSmallMovieCardMouseOut();
      }}
    >
      <Link
        className="small-film-card__link"
        to={`${AppRoute.Film}/${films.id}`}
      >
        <div
          className="small-film-card__image"
        >
          <VideoPlayer
            muted
            isPlaying={isPlaying}
            source={films.preview}
            poster={films.poster}
          />
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
