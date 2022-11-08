import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Roma'},
    {id: 2, name: 'Ivan'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Kostya'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Alex'},
    {id: 7, name: 'Valera'}
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'}
]
let posts = [
    {id: 1, messages: 'Hi, how are you?', likesCount: 15},
    {id: 2, messages: "It's my first post", likesCount: 10},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} posts={posts}/>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
