import React from "react";
import VideoPlayer from "../src/components/VideoPlayer";

export default function UseEffect() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [text, setText] = React.useState("");
  return (
    <div>
      <input
        className="p-10 border-2 border-black"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {" "}
        {isPlaying ? "Pause" : "Play"}{" "}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
}
