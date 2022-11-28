let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'}
    ],
    dialogs: [
        {id: 1, name: 'Roma'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Kostya'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Alex'},
        {id: 7, name: 'Valera'}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageBody
            };
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer;