import './Feed.css'
import React, { Component } from 'react'
import Share from '../Share/Share'
import Post from '../Post/Post'
import { Posts } from '../../dummyData'

export default class Feed extends Component {
  render() {
    return (
      <div className="feed-container">
        <div className="feed-wrapper">
          <Share />
          {Posts.map(p => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      </div>
    )
  }
}
