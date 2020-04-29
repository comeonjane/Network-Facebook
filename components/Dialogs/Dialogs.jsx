import React from 'react';
import s from './Dialogs.module.css';
import DialogDefault from './DialogItem/DialogDefault';
import MessagesDefault from './Message/MessagesDefault';

const Dialogs = () => {
    let ArrayDialogs = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Lera' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Andrey' },
        { id: 5, name: 'Max' },
        { id: 6, name: 'Max' },
        { id: 7, name: 'Max' },
        { id: 8, name: 'Max' },
    ]

    let ArrayMessages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you there?' },
        { id: 3, message: 'what did you eat today?' },
        { id: 3, message: 'what did you got today?' },
        { id: 3, message: 'what did you bought today?' },
    ]


    let DialogsElements = ArrayDialogs.map
        (dialog => <DialogDefault name={dialog.name} id={dialog.id} />);

    let MessagesElements = ArrayMessages.map
        (message => < MessagesDefault message={message.message} />)

    return (
        <div className={s.allDialogs} >
            <div className={s.Column1}>

                {DialogsElements}

            </div>
            <div className={s.Column2}>
                {MessagesElements}
                {/* < MessagesDefault message={ArrayMessages[0].message} />
                < MessagesDefault message={ArrayMessages[1].message} />
                < MessagesDefault message={ArrayMessages[2].message} /> */}
            </div>
        </div>
    )


}
export default Dialogs;