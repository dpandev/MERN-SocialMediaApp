import './Share.css'
import React, { Component } from 'react'
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

export default class Share extends Component {
  render() {
    return (
      <div className="share-container">
        <div className="share-wrapper">
          <div className="share-top">
            <img className="share-profile-img" src="/assets/person/person1.jpeg" alt="" />
            <input 
              placeholder="What's on your mind?" 
              className="share-input" 
            />
          </div>
          <hr className="share-hr" />
          <div className="share-bottom">
            <div className="share-options-container">
              <div className="share-option">
                <PermMedia htmlColor="tomato" className="share-icon" />
                <span className="share-option-text">Photo or Video</span>
              </div>
              <div className="share-option">
                <Label htmlColor="blue" className="share-icon" />
                <span className="share-option-text">Tag</span>
              </div>
              <div className="share-option">
                <Room htmlColor="green" className="share-icon" />
                <span className="share-option-text">Location</span>
              </div>
              <div className="share-option">
                <EmojiEmotions htmlColor="goldenrod" className="share-icon" />
                <span className="share-option-text">Feelings</span>
              </div>
              <button className="share-button">Share</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
