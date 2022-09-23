import {useState, useEffect, useRef} from 'react';
import {smallVideoPlayer, ERROR_MESSAGE} from '../const/const';
import * as React from "react";


type VideoPlayerProps = {
  isPlaying: boolean;
  src: string;
}

function VideoPlayer({src}: VideoPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // useEffect(() => {
  //   if (videoRef.current !== null) {
  //     videoRef.current.onloadeddata = () => setIsLoading(false);
  //   }
  //
  //   return () => {
  //     if (videoRef.current !== null) {
  //       videoRef.current.onloadeddata = null;
  //       videoRef.current = null;
  //     }
  //   };
  // }, [src]);
console.log(src)
  return (
    <>
      <video
        className="player__video"
        ref={videoRef}
        width={smallVideoPlayer.WIDTH}
        height={smallVideoPlayer.HEIGHT}
        controls
        autoPlay>
        <source src={src} type="video/webm"/>
      </video>

      <button type="button" className="player__play"
              disabled={isLoading}
              onClick={() => setIsPlaying(!isPlaying)}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
    </>
  )
}

export default VideoPlayer
