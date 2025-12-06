import React, { useState } from "react";
import Page from "./Page";
import MainContext from "./utils/MainContext";

const cartItem = [
  {
    id: 1,
    name: "Item 1",
  },
];
export default function Mainpage() {
  const [server, setServer] = useState("http://localhost:3200");
  const [item, setItem] = useState(cartItem);

  const handleAddItem = () => {
    setItem([
      ...item,
      { id: item.length + 1, name: `Item ${item.length + 1}` },
    ]);
  };

  const handleServerChange = (e) => {
    setServer(e.target.value);
  };
  return (
    <MainContext.Provider value={{ item, setItem, server }}>
      <div>
        <div className="p-15 bg-gray-500">
          <div>
            <h2>Select ServerURL</h2>

            <select onChange={handleServerChange}>
              <option value="http://localhost:3000">SERVER-1</option>
              <option value="http://localhost:30001">SERVER-2</option>
              <option value="http://localhost:30002">SERVER-3</option>
              <option value="http://localhost:30003">SERVER-4</option>
            </select>
          </div>
        </div>

        <Page onServerChange={handleServerChange} onAddItems={handleAddItem} />
      </div>
    </MainContext.Provider>
  );
}
