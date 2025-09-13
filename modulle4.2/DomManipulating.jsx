import React, { useRef } from "react";

export default function DomManipulating() {
  const myRef = useRef(null);

  const handleClick = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });

    myRef.current.style.color = "red";
    myRef.current.style.backgroundColor = "green";
    myRef.current.textContent =
      " this is an amazing feature or react js,i am loving to work with this.";
  };
  return (
    <div>
      <div ref={myRef} className="w-full h-screen bg-amber-300">
        Hello My World
      </div>
      <div className="w-full h-screen bg-amber-500">Hello My World</div>

      <div>
        <button className="bg-blue-500 " onClick={handleClick}>
          Go To the first page
        </button>
      </div>
    </div>
  );
}
