import React, { useEffect } from "react";

export default function VideoPlayer({ isPlaying, src }) {
  const ref = React.useRef(null);

  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        console.log("playing");
        ref.current.play();
      } else {
        console.log("pausing");
        ref.current.pause();
      }
    }
  }, [isPlaying]);
  return (
    <div>
      <video src={src} ref={ref} />
    </div>
  );
}
