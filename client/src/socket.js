import { io } from "socket.io-client";

const { REACT_APP_SOCKET_URL } = process.env;

console.log({ REACT_APP_SOCKET_URL });

export const socket = io(REACT_APP_SOCKET_URL);
