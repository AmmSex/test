import React from "react";
import './style.css'
import {updateNewMessage, addMessage} from '../../state/reducers/dialog-reducer'
import {Dialogs} from './Dialogs'
import {ContextStore} from '../../state/context'

function DialogsContainer(props){

    const addMessageClick = () =>{
        let mes = props.mes;
        props.dispatch(addMessage(mes));
    }

    const updateMessage = (e) =>{
        let mes = e.target.value;
        props.dispatch(updateNewMessage(mes))
    }
    // <ContextStore>
        return <Dialogs addMessageClick={addMessageClick} updateMessage={updateMessage}/>
    // </ContextStore>
}

export default DialogsContainer;