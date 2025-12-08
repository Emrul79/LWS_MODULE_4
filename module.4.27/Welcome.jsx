import React, { useState } from "react";
import ChildWelcome from "./ChildWelcome";

export default function Welcome() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <ChildWelcome />}
    </div>
  );
}
