const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageText;
      state.newMessageText = "";
      state.messages.push({ id: 4, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  body: body,
});

export default dialogsReducer;
