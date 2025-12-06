import React, { useCallback, useContext, useEffect } from "react";
import MainContext from "./utils/MainContext";
import logVisit from "./utils/server";

export default function Page({ onAddItems }) {
  const items = useContext(MainContext);
  const { item, server } = items;
  //   console.log(items);
  const leghtOfItem = item.length;

  const onVisit = useCallback((server) => {
    logVisit(server, leghtOfItem);
  });

  useEffect(() => {
    onVisit(server);
  }, [server]);

  return (
    <div>
      <h1 className="bg-amber-300 p-10">This is the page</h1>
      <button className="bg-green-700 p-5">Change Page</button>
      <button onClick={onAddItems} className=" bg-gray-500 p-5">
        Add one more item
      </button>

      <h2>Total item in the cart is {leghtOfItem}</h2>
    </div>
  );
}
