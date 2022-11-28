import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messages: 'Hi, how are you?', likesCount: 15},
                {id: 2, messages: "It's my first post", likesCount: 10},
            ],
            newPostText: ""
        },
        dialogsPage: {
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
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer (pattern)
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;