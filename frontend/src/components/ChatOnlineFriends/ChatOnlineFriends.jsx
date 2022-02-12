import axios from 'axios'
import { useEffect, useState } from 'react'
import './ChatOnlineFriends.css'

export default function ChatOnlineFriends({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([])
  const [onlineFriends, setOnlineFriends] = useState([])
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId)
      setFriends(res.data)
    }

    getFriends()
  }, [currentId])

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)))
  }, [friends, onlineUsers])

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      )
      setCurrentChat(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="chat-online">
      {onlineFriends.map((onlineFriend) => (
        <div className="chat-online-friend" onClick={() => handleClick(onlineFriend)}>
          <div className="chat-online-img-container">
            <img
              className="chat-online-img"
              src={
                onlineFriend?.profilePicture
                  ? PF + onlineFriend.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
            />
            <div className="chat-online-badge"></div>
          </div>
          <span className="chat-online-name">{onlineFriend?.username}</span>
        </div>
      ))}
    </div>
  )
}