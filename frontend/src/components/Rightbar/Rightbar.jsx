import './Rightbar.css'
import { Users } from '../../dummyData'
import OnlineFriends from '../OnlineFriends/OnlineFriends'

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img src="/assets/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbar-ad" />
        <h4 className="rightbar-friends-title">Online Friends</h4>
        <ul className="rightbar-friends-list">
          {Users.map(u => (
            <OnlineFriends key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar-title">User information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">New York</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">Madrid</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">relationship:</span>
            <span className="rightbar-info-value">Single</span>
          </div>
        </div>
        <h4 className="rightbar-title">User friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img src="/assets/person/person1.jpeg" alt="" className="rightbar-following-img" />
            <span className="rightbar-following-username">John Carter</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar-container">
      <div className="rightbar-wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
