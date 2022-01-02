import React from 'react'
import './OnlineFriends.css'

export default function OnlineFriends({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className="rightbar-friends-item">
      <div className="rightbar-profile-img-container">
        <img 
          src={PF+user.profilePicture}
          alt="" 
          className="rightbar-profile-img" 
        />
        <span className="rightbar-friends-online"></span>
      </div>
      <span className="rightbar-friend-username">{user.username}</span>
    </li>
  )
}
