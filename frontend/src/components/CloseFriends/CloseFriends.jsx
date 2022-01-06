import React from 'react'
import './CloseFriends.css'

export default function CloseFriends({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className="sidebar-friend-list-item">
      <img className="sidebar-friend-img" src={PF+user.profilePicture} alt="" />
      <span className="sidebar-friend-name">{user.username}</span>
    </li>
  )
}
