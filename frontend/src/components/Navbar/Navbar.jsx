import './Navbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { logoutCall } from '../../apiCalls'

export default function Navbar() {
  const { user, dispatch } = useContext(UserContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const handleClick = () => {
    logoutCall(dispatch)
  }

  return (
    <div className="navbar-container">
      <div className="nav-left">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="site-logo">SocialMediaApp</span>
        </Link>
      </div>
      <div className="nav-center">
        <div className="nav-search">
          <Search className="search-icon" />
          <input placeholder="Search for friends, posts or videos" className="search-input" />
        </div>
      </div>
      <div className="navbar-right">
        <div className="nav-links-container">
          <span className="nav-link">Homepage</span>
          <span className="nav-link">Timeline</span>
        </div>
        <div className="nav-icons-container">
          <div className="nav-icon">
            <Person />
            <span className="nav-icon-badge">1</span>
          </div>
          <div className="nav-icon">
            <Chat />
            <span className="nav-icon-badge">2</span>
          </div>
          <div className="nav-icon">
            <Notifications />
            <span className="nav-icon-badge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img 
            src={user.profilePicture ? PF+user.profilePicture : PF+"/person/defaultAvatar.png"} 
            alt="" 
            className="nav-profile-img" 
          />
        </Link>
        <span className="topbarLink" onClick={handleClick}>Sign out</span>
      </div>
    </div>
  )
}
