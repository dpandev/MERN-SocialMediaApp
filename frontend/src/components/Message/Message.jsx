import React from 'react'
import Timeago from 'react-timeago'
import './Message.css'

export default function Message({ message, isCurrentUser }) {
  return (
    <div className={isCurrentUser ? "message current-user-msg" : "message"}>
      <div className="message-top">
        <img src="" alt="" className="message-img" />
        <p className="message-text">{message.text}</p>
      </div>
      <div className="message-bottom">
        <Timeago date={new Date(2002, 22, 2)} />
      </div>
    </div>
  )
}
