import './Sidebar.css'
import React, { Component } from 'react'
import { RssFeed, Chat, PlayCircle, Groups, Bookmark, HelpOutline, Work, Event, School } from '@mui/icons-material'
import { Users } from '../../dummyData'
import CloseFriends from '../CloseFriends/CloseFriends'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-wrapper">
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <RssFeed className="sidebar-icon" />
              <span className="sidebar-list-item-text">Feed</span>
            </li>
            <li className="sidebar-list-item">
              <Chat className="sidebar-icon" />
              <span className="sidebar-list-item-text">Chat</span>
            </li>
            <li className="sidebar-list-item">
              <PlayCircle className="sidebar-icon" />
              <span className="sidebar-list-item-text">Videos</span>
            </li>
            <li className="sidebar-list-item">
              <Groups className="sidebar-icon" />
              <span className="sidebar-list-item-text">Groups</span>
            </li>
            <li className="sidebar-list-item">
              <Bookmark className="sidebar-icon" />
              <span className="sidebar-list-item-text">Bookmarks</span>
            </li>
            <li className="sidebar-list-item">
              <HelpOutline className="sidebar-icon" />
              <span className="sidebar-list-item-text">Questions</span>
            </li>
            <li className="sidebar-list-item">
              <Work className="sidebar-icon" />
              <span className="sidebar-list-item-text">Jobs</span>
            </li>
            <li className="sidebar-list-item">
              <Event className="sidebar-icon" />
              <span className="sidebar-list-item-text">Events</span>
            </li>
            <li className="sidebar-list-item">
              <School className="sidebar-icon" />
              <span className="sidebar-list-item-text">Courses</span>
            </li>
          </ul>
          <button className="sidebar-button">Show More</button>
          <hr className="sidebar-hr" />
          <ul className="sidebar-friend-list">
            {Users.map(u => (
              <CloseFriends key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
