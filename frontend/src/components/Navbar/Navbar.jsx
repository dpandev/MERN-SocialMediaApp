import React, { Component } from 'react'
import './Navbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="nav-left">
          <span className="site-logo">SocialMediaApp</span>
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
          <img src="/assets/person/person1.jpeg" alt="" className="nav-profile-img" />
        </div>
      </div>
    )
  }
}
