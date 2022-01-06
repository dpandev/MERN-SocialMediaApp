import './Login.css'
import { useContext, useRef } from "react"
import { Link } from 'react-router-dom'
import { loginCall } from "../../apiCalls"
import { UserContext } from "../../Context/UserContext"

export default function Login() {
  const email = useRef()
  const password = useRef()
  const { isFetching, dispatch } = useContext(UserContext)

  const handleClick = (e) => {
    e.preventDefault()
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    )
  }
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left-container">
          <h3 className="login-logo">SocialMediaApp</h3>
          <span className="login-desc">
            Connect with friends, family and the world around you on SocialMediaApp
          </span>
        </div>
        <div className="login-right-container">
          <form className="login-box" onSubmit={handleClick}>
            <input 
              className="login-input" 
              required 
              type="email" 
              placeholder="Email" 
              ref={email} 
            />
            <input  
              className="login-input" 
              required 
              type="password" 
              minLength="6"
              placeholder="Password" 
              ref={password} 
            />
            <button className="login-button" type="submit" disabled={isFetching}>
              {isFetching ? "Loading" : "Log in"}
            </button>
            <span className="login-forgot">Forgot your password?</span>
            <button className="login-register-button">
              <Link to="/register" style={{ textDecoration: "none" }} >Create an account</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
