let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, messages: 'Hi, how are you?', likesCount: 15},
        {id: 2, messages: "It's my first post", likesCount: 10},
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return  {
                ...state,
                posts: [...state.posts, {id: 5, messages: state.newPostText, likesCount: 0}],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer;