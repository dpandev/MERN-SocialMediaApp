import React, { Component } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="home-container">
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
      </>
    )
  }
}
