import {useState, useEffect, useRef} from 'react';
import {smallVideoPlayer, ERROR_MESSAGE} from '../const/const';


type VideoPlayerProps = {
  isPlaying: boolean;
  src: string;
}

function VideoPlayer({src}: VideoPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [src]);


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
