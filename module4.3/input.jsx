import { useRef } from "react";
import { MyInput } from "./forwardRef";

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />

      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
