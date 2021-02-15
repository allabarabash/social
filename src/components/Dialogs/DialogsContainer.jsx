import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// former props which came from state; e.g dialogsPage
const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

// callbacks (or dispatched actions)
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            const action = updateNewMessageBodyActionCreator(body)
            dispatch(action)
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) // f1 - data from state, f2 - callbacks

export default DialogsContainer