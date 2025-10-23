import { useEffect } from "react";
import { createConnection } from "./utils/chat";

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();

    // This will run when the component unmounts
    return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
