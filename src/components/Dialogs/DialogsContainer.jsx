import React from "react";
import Dialogs from "./Dialogs";
import { updateNewMessageTextCreator, sendMessageCreator } from "../../Redux/dialogs-reducer";


const MessagePlus = () => {
    let newMessage = React.createRef();
    let addMessage = () => {
        let mes = newMessage.current.value;
        alert(mes);
    }
    return (
        <div> <textarea ref={newMessage}></textarea>
            <button onClick={addMessage}>Add message</button>
        </div>
    )
}



const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextCreator(body));
    }
    return (
        <Dialogs updateNewMessageTextCreator={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state} />
    );
};

export default DialogsContainer;
