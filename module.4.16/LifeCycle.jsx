import { useEffect } from "react";
import { default as createConnection } from "./connection";
import { logVisit } from "./connection.js";
// const serverUrl = "https://localhost:1234";

export default function ChatRoom({ roomId, serverUrl }) {
  console.log("rendering");
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);

    connection.connect(); // Connects to the "general" room
    console.log(`sychronizing with ${roomId}`);

    //cleanup function:
    return () => {
      console.log(` stop sychronizing with ${roomId}`);
      connection.disconnect(); // DisConnected to the "general" room
    };
  }, [roomId, serverUrl]);
  // ...
  useEffect(() => {
    logVisit(roomId);
  }, [roomId]);
  return (
    <h1 className="bg-gray-600 p-10  font-bold">
      Welcome to the {roomId} chat!
    </h1>
  );
}
