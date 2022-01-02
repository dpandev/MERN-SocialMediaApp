import { useEffect, useState } from 'react'
import './Profile.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState({})
  const username = useParams().username

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`)
      setUser(res.data)
    }
    fetchUser()
  }, [username])

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img 
                src={
                  user.coverPicture 
                    ? PF + user.coverPicture 
                    : PF + "person/defaultCover.jpg"} 
                alt="" className="profile-cover-img" 
              />
              <img 
                src={
                  user.profilePicture 
                    ? PF + user.profilePicture 
                    : PF + "person/defaultAvatar.png"} 
                alt="" className="profile-user-img" 
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">{user.username}</h4>
              <span className="profile-info-desc">{user.desc}</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed username={username} />
            <Rightbar profile user={user} />
          </div>
        </div>
      </div>
    </>
  )
}
