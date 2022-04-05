import React from "react";
import './style.css'

function Post({text, likeCount}){
    return(
        <div className='post'>
            <img src='https://pngicon.ru/file/uploads/vk-256x256.png' atl='1'/>
            <p>{text}</p>
            <h4>Like: {likeCount}</h4>
        </div>
    )
}

export default Post;