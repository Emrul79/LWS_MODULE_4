import React, { useState } from "react";
import ChatRoom from "./LifeCycle";

export default function MainChatRoom() {
  const [roomId, setRoomId] = React.useState("GENEREL");
  const [showChart, setShawCart] = useState(false);
  const [server, setServer] = useState("http://localhost:3000");

  return (
    <>
      <button
        className="px-5 py1 bg-blue-600 rounded-2xl"
        onClick={() => setShawCart(!showChart)}
      >
        {showChart ? "Hide Chat Room" : "Show Chat Room"}
      </button>
      {showChart && (
        <>
          <hr />
          <div className="p-15 bg-gray-500">
            <div>
              <input
                className="p-5 border-2 border-black"
                value={server}
                onChange={(e) => setServer(e.target.value)}
              />
            </div>
            <h2>Select Chat Room</h2>

            <select onChange={(e) => setRoomId(e.target.value)}>
              <option value="GENEREL">GENEREL</option>
              <option value="TRAVEL">TRAVEL</option>
              <option value="MUSIC">MUSIC</option>
              <option value="SHOPPING">SHOPPING</option>
            </select>
          </div>

          <ChatRoom roomId={roomId} serverUrl={server} />
        </>
      )}
    </>
  );
}
