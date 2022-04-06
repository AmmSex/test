import React from "react";
import { InputMesContainer } from "../InputValue/InputMesContainer";
import Post from "../Post/Post";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {changeInputDispatch} from '../../state/reducers/profile-reduser'


import './style.css'

const ProfileInfo = () => {
  return(
    <div>
      <img className='foto' src='https://www.linguacontact.ru/wp-content/uploads/2021/04/testy.jpg' height="400" />
    </div>
  )
}

function Profile({text, valueOneAnswer, dispatch}){  
  let colorTextField = '';

  const onCheck = () =>{
   // (valueOneAnswer == 8) ? colorTextField = 'success': (valueOneAnswer > 0 || isNaN(valueOneAnswer)) ? colorTextField = 'warning' : colorTextField = '';
  }

  const updateValue = (e) => {
    let mes = e.target.value;
    dispatch(changeInputDispatch(Number(mes)))
    console.log(mes)
  }

  (valueOneAnswer == 8) ? colorTextField = 'success': (valueOneAnswer > 0 || isNaN(valueOneAnswer)) ? colorTextField = 'warning' : colorTextField = '';

  return(
      <div className='content'>
        <ProfileInfo />
        <div className='question'>
          <p> 1) Сколько типов данных в JavaScript? </p>
          <TextField
            required
            id="outlined-required"
            label="Answer"
            defaultValue=""
            onChange={updateValue}
            color={colorTextField}
          />
          <Button variant="outlined" onClick={onCheck}>Проверить</Button>
        </div>
    </div>
  )
}

export default Profile;