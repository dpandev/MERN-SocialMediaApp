import './Login.css'
import React from 'react'

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left-container">
          <h3 className="login-logo">SocialMediaApp</h3>
          <span className="login-desc">
            Connect with friends and the world around you on SocialMediaApp
          </span>
        </div>
        <div className="login-right-container">
          <div className="login-box">
            <input type="text" className="login-input" placeholder="Email" />
            <input type="text" className="login-input" placeholder="Password" />
            <button className="login-button">Login</button>
            <span className="login-forgot">Forgot your password?</span>
            <button className="login-register-button">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
