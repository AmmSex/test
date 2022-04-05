import React from 'react'

export const InputMessage = (props) =>{
    let textarea = React.createRef();
  
    let newPost=()=>{
        props.newPost();
    }
    
    const changeText = () => {
      let text = textarea.current.value;
      props.changeText(text)
    }
  
    return(
      <div>
          <h1>My posts</h1>
          <div className='newPost'>
            <p>New post</p>
            <textarea ref={textarea} value={props.valueTextarea} onChange={changeText}></textarea>
            <button type='button' onClick={newPost}>Publish</button>
          </div>
      </div>
    )
  }