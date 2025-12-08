import React, { useRef } from "react";
import useFadeInHook from "./hooks/useFadeInHook";

export default function ChildWelcome() {
  const ref = useRef(null);

  useFadeInHook(ref, 2000);

  return (
    <div ref={ref} className="welcome">
      WELLCOME HOME COMERADE
    </div>
  );
}
