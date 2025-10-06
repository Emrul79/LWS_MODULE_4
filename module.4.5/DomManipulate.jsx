import React, { useRef, useState } from "react";

export default function DomManipulate() {
  const [show, setShow] = useState(false);
  const myRef = useRef(null);
  return (
    <div>
      <div>
        <button className="bg-blue-500 " onClick={() => setShow(!show)}>
          {show ? "HIDE THE TEXT" : "SHOW ME THE TEXT"}
        </button>
      </div>
      <div>
        <button onClick={() => myRef.current.remove()}>
          REMOVE FROM THE BODY
        </button>
      </div>

      <div>{show && <h1 ref={myRef}>This is a basic test text!</h1>}</div>
    </div>
  );
}
