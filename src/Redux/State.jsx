const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, what up?" },
                { id: 2, message: "Its my first post" },
            ],
            newPostText: "some"
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Vasia" },
                { id: 2, name: "Taras" },
                { id: 3, name: "Olia" },
                { id: 4, name: "Nina" },
                { id: 5, name: "Stepan" },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How it is going?" },
                { id: 3, message: "Do you study?" },
            ],
            newMessageText: ""
        }
    },
    _callSubscriber() {
        console.log('state  changed');
    },
    getState() {
        return this._state;

    },
    subscribe(observer) {
        this._callSubscriber = observer;//патерн observer

    },

    dispatch(action) {//{type:'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);

        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.messages.push({ id: 4, message: body });
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        }
    }

}
export const addPostCreator = () => ({ type: ADD_POST })

export const updateNewPostTextCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, body: body })


export default store;
window.store = store;