import './Register.css'
import React from 'react'

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="register-left-container">
          <h3 className="register-logo">SocialMediaApp</h3>
          <span className="register-desc">
            Connect with friends and the world around you on SocialMediaApp
          </span>
        </div>
        <div className="register-right-container">
          <div className="register-box">
            <input type="text" className="register-input" placeholder="Username" />
            <input type="text" className="register-input" placeholder="Email" />
            <input type="text" className="register-input" placeholder="Password" />
            <input type="text" className="register-input" placeholder="Confirm Password" />
            <button className="register-button">Sign up</button>
            <button className="register-submit-button">Log into your account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
