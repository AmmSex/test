import React from "react";
import './style.css'
import {NavLink} from 'react-router-dom'

const Friend = (props) =>{
    return(
        <section className='friend'>
            <img src={props.src} alt='1'/>
            <p>{props.name}</p>
        </section>
    )
}

function Nav(){
   // let friends=friendsProfile.map(elem => <Friend key={elem.id} name={elem.name} src={elem.src}/>)
    return(
        <nav className='nav'>
            <div><NavLink to='/profile'>Profile</NavLink></div>
            <div><NavLink to='/dialog'>Messages</NavLink></div>
            <div><a href='/new'>New</a></div>
            <div><a href='/music'>Music</a></div>
            <div><a href='/setting'>Settings</a></div>
            <div className='friends'>
                <h1>Friends</h1>
                {/* <div className='listFriends'>
                   {friends}
                </div> */}
            </div>
        </nav>
    )
}

export default Nav;