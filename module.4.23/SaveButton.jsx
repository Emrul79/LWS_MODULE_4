import React from "react";
import useOnlineStatus from "./useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();
  return (
    <>
      <button
        className="border "
        disabled={!isOnline}
        onClick={() => console.log("save progress")}
      >
        {isOnline ? "Save Progress" : "Offline"}
      </button>
    </>
  );
}
