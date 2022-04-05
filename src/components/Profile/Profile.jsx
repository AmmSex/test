import React from "react";
import { InputMesContainer } from "../InputValue/InputMesContainer";
import Post from "../Post/Post";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './style.css'

const ProfileInfo = () => {
  return(
    <div>
      <img className='foto' src='https://www.linguacontact.ru/wp-content/uploads/2021/04/testy.jpg' height="400" />
      {/* <div>
        <img className='avatar' src='https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg'/>  
      </div> */}
      {/* <h1>Тест</h1> */}
    </div>
  )
}

// const Question = () => {
//   return(
//     <div>
//       <p>1) Сколько типов данных в JavaScript?</p>
//       <input placeholder='Введите ответ...'/>
//     </div>
//   )
// }

function Profile({text,  valueTextarea,  dispatch}){
  const post = text.map(elem => <Post key={elem.id} text={elem.post} likeCount={elem.likeCount}/>)
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
            />
            {/* <button type='button' value='Проверить'>Проверить</button> */}
            <Button variant="outlined">Проверить</Button>

          </div>

          {/* <Question /> */}
          {/* <main className='main'>
             <InputMesContainer valueTextarea={valueTextarea} dispatch={dispatch}/>
              <div className='allPosts'>
                {post}       
              </div>
          </main> */}

      </div>
    )
}

export default Profile;