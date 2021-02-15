import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    const state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    const onNewMessageChange = (body) => {
        const action = updateNewMessageBodyActionCreator(body)
        props.store.dispatch(action)
    }


    return (<Dialogs sendMessage={onSendMessageClick}
                     updateNewMessageBody={onNewMessageChange}
                     dialogsPage={state}
    />  )
}

export default DialogsContainer;