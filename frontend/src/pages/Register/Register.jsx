import './Register.css'
import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const confirmPassword = useRef()
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    if (confirmPassword.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords do not match!")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        await axios.post("/auth/register", user)
        navigate("/login") //redirect user to login after successful signup
      } catch(err) {
        console.log(err)
      }
    }
  }

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
          <form className="register-box" onSubmit={handleClick}>
            <input type="text" className="register-input" required ref={username} placeholder="Username" />
            <input className="register-input" type="email" required ref={email} placeholder="Email" />
            <input className="register-input" minLength="6" type="password" required ref={password} placeholder="Password" />
            <input className="register-input" type="password" required ref={confirmPassword} placeholder="Confirm Password" />
            <button className="register-button" type="submit">Sign up</button>
            <button className="register-submit-button"><Link to="/login" style={{ textDecoration: "none" }}>Log into your account</Link></button>
          </form>
        </div>
      </div>
    </div>
  )
}