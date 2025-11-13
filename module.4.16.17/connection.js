export default function createConnection(serverUrl, roomId) {
  return {
    connect: () => {
      console.log(`Connecting to ${serverUrl} for room ${roomId}`);
    },
    disconnect: () => {
      console.log(`Disconnecting from ${serverUrl} for room ${roomId}`);
    },
  };
}

export const logVisit = (roomId) => {
  console.log(`Visiting room ${roomId}`);
};
