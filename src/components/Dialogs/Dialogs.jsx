import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements =  props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />  )
    const messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message}/> )
    const newMessageBody = props.dialogsPage.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e) => {
        const body = e.target.value
        props.updateNewMessageBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'/></div>
                    <div><button onClick={ onSendMessageClick }> Send </button></div>
                </div>
            </div>

        </div>


    )
}

export default Dialogs;