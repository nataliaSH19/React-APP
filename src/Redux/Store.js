import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, what up?" },
        { id: 2, message: "Its my first post" },
      ],
      newPostText: "some",
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
      newMessageText: "write",
    },
  },
  _callSubscriber() {
    console.log("state  changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //патерн observer
  },

  dispatch(action) {
    //{type:'ADD-POST'}

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
