import {socket} from './socket';

const send = (text) => { // id: authorize.getSession('mail') }
    socket.emit('message', {
        data: text,
        id: 'test@test.com'
    });
};

const escapeScript = (unsafe) => {
    const safeString = unsafe.replace(/</g, ' ').replace(/>/g, ' ').replace(/&/g, ' ').replace(/"/g, ' ').replace(/\\/, ' ').replace(/\s+/g, ' ');
    return safeString.trim();
};

export const scrollDown = (el, child) => {
    // console.log(el.offsetHeight);
    // const distanceToScroll = el.scrollHeight - (child.offsetHeight + 120);
    // TODO: Fix scrollDown issue

    if (el && child) 
        el.scrollTop = el.scrollHeight + 100;
    


    return false;
};

export const validateMessage = (message) => {
    const text = message;
    const safeText = text ? escapeScript(text) : '';
    if (safeText.length && safeText !== ' ') {
        send(safeText);
        console.log(safeText);
    }
    return;
};
