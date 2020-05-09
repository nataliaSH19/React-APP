import React from "react";
import Dialogs from "./Dialogs";
import { updateNewMessageTextCreator, sendMessageCreator } from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageTextCreator: (body) => {
            dispatch(updateNewMessageTextCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }

    }

}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
