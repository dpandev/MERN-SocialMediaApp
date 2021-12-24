import React from 'react'
import './Profile.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img src="/assets/post/post3.jpeg" alt="" className="profile-cover-img" />
              <img src="/assets/person/person7.jpeg" alt="" className="profile-user-img" />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Safak</h4>
              <span className="profile-info-desc">profile desc</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
        
      </div>
    </>
  )
}
