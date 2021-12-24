import React from 'react'
import './CloseFriends.css'

export default function CloseFriends({user}) {
  return (
    <li className="sidebar-friend-list-item">
      <img className="sidebar-friend-img" src={user.profilePicture} alt="" />
      <span className="sidebar-friend-name">{user.username}</span>
    </li>
  )
}
