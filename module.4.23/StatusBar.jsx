import React from "react";
import useOnlineStatus from "./useOnlineStatus";

export default function StatusBar() {
  const isOnline = useOnlineStatus();
  return (
    <div>
      <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
    </div>
  );
}
