import React from "react";
import { InputMesContainer } from "../InputValue/InputMesContainer";
import Post from "../Post/Post";
import './style.css'

const ProfileInfo = () => {
  return(
    <div>
      <img className='foto' src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
      <div>
        <img className='avatar' src='https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg'/>  
      </div>
    </div>
  )
}

function Profile({text,  valueTextarea,  dispatch}){
  const post = text.map(elem => <Post key={elem.id} text={elem.post} likeCount={elem.likeCount}/>)
    return(
        <div className='content'>
          <ProfileInfo />
          <main className='main'>
             <InputMesContainer valueTextarea={valueTextarea} dispatch={dispatch}/>
              <div className='allPosts'>
                {post}       
              </div>
          </main>
      </div>
    )
}

export default Profile;