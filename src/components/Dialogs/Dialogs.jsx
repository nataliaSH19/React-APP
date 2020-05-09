import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElement = state.messages.map(m => <Message messageItem={m.message} />)
    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageTextCreator(body);

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

        </div >

    );
};

export default Dialogs;
