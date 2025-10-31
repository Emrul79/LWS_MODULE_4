import React, { useState } from "react";
import PlayGround from "./PlayGround";

export default function ParentGround() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide The PlayGround" : "Show The PlayGround"}
      </button>
      {show && <hr />}
      {show && <PlayGround />}
    </>
  );
}
