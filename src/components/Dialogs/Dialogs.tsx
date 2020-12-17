import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import state, {DialogsPageType} from "../../redux/state";


/*const MessageItem = (props: { message: string }) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}*/

const Dialogs = (props:DialogsPageType) => {

    let dialogs=props.dialogs
    let messages =props.messages


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    let messagesElements = messages.map(m => <Message id={m.id} message={m.message} />);



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {messagesElements}

            </div>

            <div className={s.messages}>

            </div>
        </div>
    )
}
export default Dialogs;