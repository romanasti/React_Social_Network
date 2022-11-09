
let state = {
    profilePage: {
        posts:[
            {id: 1, messages: 'Hi, how are you?', likesCount: 15},
            {id: 2, messages: "It's my first post", likesCount: 10},
        ],
    },
    dialogsPage: {
        messages:[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'}
        ],
        dialogs:[
            {id: 1, name: 'Roma'},
            {id: 2, name: 'Ivan'},
            {id: 3, name: 'Andrey'},
            {id: 4, name: 'Kostya'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Alex'},
            {id: 7, name: 'Valera'}
        ]
    }
}

export default state;