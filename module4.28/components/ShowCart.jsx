import React from "react";

export default function ShowCart({ count, title }) {
  console.log("cart rendering");
  return (
    <div>
      <h1>{title}</h1>
      <div>The Number is {count}</div>
    </div>
  );
}
