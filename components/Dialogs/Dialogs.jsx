  import React from 'react';
import s from './Dialogs.module.css';
import DialogDefault from './DialogItem/DialogDefault';
import MessagesDefault from './Message/MessagesDefault';

const Dialogs = (props) => {
    


    let DialogsElements = props.data1.dialogs.map
        (dialog => <DialogDefault name={dialog.name} id={dialog.id} />);

    let MessagesElements = props.data1.messages.map
        (message => < MessagesDefault message={message.message} />);
         
let newMessageElement=React.createRef();

let addMessage=()=>{let text=newMessageElement.current.value;
alert(text); }
    return (
        <div className={s.allDialogs} >
            <div className={s.Column1}>

                {DialogsElements}

            </div>
            <div className={s.Column2}>
                {MessagesElements}
                <div><textarea ref={newMessageElement}></textarea></div>
                <div><button onClick={addMessage}>Add message</button></div>
                {/* < MessagesDefault message={ArrayMessages[0].message} />
                < MessagesDefault message={ArrayMessages[1].message} />
                < MessagesDefault message={ArrayMessages[2].message} /> */}
            </div>
        </div>
    )


}
export default Dialogs;