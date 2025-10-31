import React, { useEffect, useState } from "react";

export default function PlayGround() {
  const [text, setText] = useState("a");

  useEffect(() => {
    function onTimeOut() {
      console.log(" After TimeOut  " + text);
    }

    console.log("CURRENT TIME " + text);
    const timeOutId = setTimeout(onTimeOut, 2000);

    //cleanUp
    return () => {
      console.log("cleanUp" + text);
      clearInterval(timeOutId);
    };
  }, [text]);
  return (
    <div>
      <label>
        WHAT TO LOG{" "}
        <input
          className="bg-white border border-black rounded-xl p-5 my-20"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>

      <h1 className="bg-amber-600 text-2xl text-white">{text}</h1>
    </div>
  );
}
