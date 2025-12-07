import { useCallback, useEffect } from "react";
import { createConnection } from "./Chat";

export function useChatRoom({ serverUrl, roomId, onReciveMessage }) {
  const onMessage = useCallback(onReciveMessage);
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.connect();
    connection.on("message", onMessage);
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
