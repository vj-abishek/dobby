import io from 'socket.io-client';

export const socket = io.connect('http://65.0.106.77:5400', {transports: ['websocket']});
