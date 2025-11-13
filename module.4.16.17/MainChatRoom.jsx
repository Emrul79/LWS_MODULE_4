import React, { useState } from "react";
import ChatRoom from "./LifeCycle";
import { ServerContext } from "./context/serverContext";

export default function MainChatRoom() {
  const [roomId, setRoomId] = React.useState("GENEREL");
  const [showChart, setShawCart] = useState(false);
  const [server, setServer] = useState(null);

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
              <h2>Select ServerURL</h2>

              <select onChange={(e) => setServer(e.target.value)}>
                <option value="http://localhost:3000">SERVER-1</option>
                <option value="http://localhost:30001">SERVER-2</option>
                <option value="http://localhost:30002">SERVER-3</option>
                <option value="http://localhost:30003">SERVER-4</option>
              </select>
            </div>

            <div>
              <h2>Select Chat Room</h2>

              <select onChange={(e) => setRoomId(e.target.value)}>
                <option value="GENEREL">GENEREL</option>
                <option value="TRAVEL">TRAVEL</option>
                <option value="MUSIC">MUSIC</option>
                <option value="SHOPPING">SHOPPING</option>
              </select>
            </div>
          </div>
          <ServerContext.Provider
            value={{
              serverUrl: "http://localhost:3000",
            }}
          >
            <ChatRoom roomId={roomId} serverUrl={server} />
          </ServerContext.Provider>
        </>
      )}
    </>
  );
}
