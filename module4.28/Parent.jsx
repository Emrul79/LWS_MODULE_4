import React from "react";
import ShowCart from "./components/ShowCart";
import Title from "./components/Title";

export default function Performance() {
  console.log("main page rendering");
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const incrementCount1 = () => {
    setCount1(count1 + 1);
  };
  const incrementCount2 = () => {
    setCount2(count2 + 5);
  };
  return (
    <div>
      <Title text={count1} />
      <ShowCart count={count1} title="Counter 1" />
      <button onClick={incrementCount1}>Increament by ONE</button>
      <hr />
      <ShowCart count={count2} title="Counter 1" />
      <button onClick={incrementCount2}>Increament by Five</button>
    </div>
  );
}
