import {useState, useEffect, useRef} from 'react';
import {smallVideoPlayer, ERROR_MESSAGE} from '../const/const';


type VideoPlayerProps = {
  muted: boolean;
  source: string;
  poster: string;
  isPlaying: boolean;
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      width={smallVideoPlayer.WIDTH}
      height={smallVideoPlayer.HEIGHT}
    >
      {ERROR_MESSAGE}
    </video>
  )

}

export default VideoPlayer
