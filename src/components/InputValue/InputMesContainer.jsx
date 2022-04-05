import React from 'react'
import { InputMessage } from '.';
import {addPostDispatch, changeTextareaDispatch} from '../../state/reducers/profile-reduser'

export const InputMesContainer = ({valueTextarea, dispatch}) =>{
  
    let newPost=()=>{
      dispatch(addPostDispatch())
    }
    
    const changeText = (text) => {
      dispatch(changeTextareaDispatch(text))
    }
  
    return(<InputMessage newPost={newPost} changeText={changeText} valueTextarea={valueTextarea}/>)
  }