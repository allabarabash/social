import React from 'react';

import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator())
                }

                const onNewMessageChange = (body) => {
                    const action = updateNewMessageBodyActionCreator(body)
                    store.dispatch(action)
                }
                return (
                    <Dialogs sendMessage={onSendMessageClick}
                             updateNewMessageBody={onNewMessageChange}
                             dialogsPage={state}/>)
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;