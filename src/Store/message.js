import {writable} from 'svelte/store';
import MessageHandler from '../Helpers/MessageHandler';
import {socket} from '../Helpers/socket';


const initialState = [{
        bot: true,
        text: `Hi there 🖐. I’m Dobby, your Guvi assistant. There's a lot I can help with.`
    }];

export const messages = writable(initialState);

socket.on('welcome', function (data) {
    console.log(data);
    MessageHandler(data);
});
