import { useEffect, useState } from "react";

const useOnLineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  function handleOnline() {
    setIsOnline(true);
  }
  function handleOffLine() {
    setIsOnline(false);
  }

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffLine);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffLine);
    };
  }, []);
  return isOnline;
};
export default useOnLineStatus;
