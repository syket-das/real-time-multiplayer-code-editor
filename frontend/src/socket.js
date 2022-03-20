import { io } from 'socket.io-client';

export const initSocket = async () => {
  const options = {
    transports: ['websocket'],
    reconnectionAttempts: 'Infinity',
    'force new connection': true,
    timeout: 10000,
  };

  return io('https://multiplayer-code-editor.herokuapp.com', options);
};
