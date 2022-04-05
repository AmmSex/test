import React from "react";
import './style.css'
import {NavLink} from 'react-router-dom'
import {updateNewMessage, addMessage} from '../../state/reducers/dialog-reducer'

const Item = ({name, id}) => {
    return(
        <NavLink to={'/dialog/' + id}>{name}</NavLink>
    )
}

const Message = ({message}) => {
    return(
        <div>{message}</div> 
    )
} 

function Dialogs(props){
    
    const messagesData = props.message.map(elem => <Message message={elem.message} key={elem.id}/>);

    const itemsPeople = props.items.map(elem => <Item key={elem.id} name={elem.name} likeCount={elem.likeCount}/>)

    const addMessageClick = () =>{
        let mes = props.mes;
        props.dispatch(addMessage(mes));
    }

    const updateMessage = (e) =>{
        let mes = e.target.value;
        props.dispatch(updateNewMessage(mes))
    }

    return(
        <div className='dialog'>
            <div className='items'>
                {itemsPeople}
            </div>
            <div className='dialogs'>
                {messagesData}
                <section className='sendMessage'>
                    <textarea style={{width: 200}} onChange={updateMessage} value={props.mes} className='textarea'>{props.mes}</textarea>
                    <button style={{width: 60, height: 30}} onClick={addMessageClick} type='button'>Send</button>
                </section>
            </div>
        </div>
    )
}

export default Dialogs;