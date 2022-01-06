import './Rightbar.css'
import { Users } from '../../dummyData'
import OnlineFriends from '../OnlineFriends/OnlineFriends'
import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { Add, Remove } from "@mui/icons-material"

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [friends, setFriends] = useState([])
  const { user: currentUser, dispatch } = useContext(UserContext)
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  )

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendsList = await axios.get("/users/friends/" + currentUser._id)
        setFriends(friendsList.data)
      } catch(err) {
        console.log(err)
      }
    }
    getFriends()
  }, [currentUser])

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id })
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id })
      }
      setFollowed(!followed)
    } catch (err) {
      console.log(err);
    }
  }

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img src="/assets/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text">
            <b>Mariam Rend</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.jpg" alt="" className="rightbar-ad" />
        <h4 className="rightbar-friends-title">Online Friends</h4>
        <ul className="rightbar-friends-list">
          {Users.map((u) => (
            <OnlineFriends key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbar-follow-btn" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbar-title">User information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">{user.city}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">{user.from}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">relationship:</span>
            <span className="rightbar-info-value">
              {user.relationship === 1 
                ? "Single" 
                : user.relationship === 2 
                ? "Married" 
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbar-title">User friends</h4>
        <div className="rightbar-followings">
          {friends.map((friend) => (
            <Link to={"/profile/" + friend.username} style={{textDecoration:"none"}}>
              <div className="rightbar-following">
                <img 
                  src={friend.profilePicture ? PF+friend.profilePicture : PF+"/person/defaultAvatar.png"} 
                  alt="" 
                  className="rightbar-following-img" 
                />
                <span className="rightbar-following-username">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    )
  }
  return (
    <div className="rightbar-container">
      <div className="rightbar-wrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
