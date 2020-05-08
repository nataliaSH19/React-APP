import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
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



const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElement = state.messages.map(m => <Message messageItem={m.message} />)
    let newMessageText = state.newMessageText;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageTextCreator(body));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>

                {dialogsElement}
            </div>



            <div className={s.messages}>

                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageText}
                        onChange={onNewMessageChange}
                        placeholder='Enter message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>SEND</button></div>
                </div>
            </div>
            <MessagePlus />
        </div >

    );
};

export default Dialogs;
