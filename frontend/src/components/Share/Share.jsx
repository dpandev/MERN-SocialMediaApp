import './Share.css'
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from "@mui/icons-material"
import { useContext, useRef, useState } from 'react'
import { UserContext } from '../../Context/UserContext'
import axios from 'axios'

export default function Share() {
  const {user} = useContext(UserContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const desc = useRef()
  const [file, setFile] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }
    try {
      await axios.post("/posts", newPost)
      window.location.reload()
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="share-container">
      <div className="share-wrapper">
        <div className="share-top">
          <img 
            className="share-profile-img" 
            src={user.profilePicture ? PF+user.profilePicture : PF+"person/defaultAvatar.png"} 
            alt="" 
          />
          <input 
            placeholder={"What's on your mind " + user.username + "?"} 
            className="share-input" 
            ref={desc}
          />
        </div>
        <hr className="share-hr" />
        {file && (
          <div className="share-img-container">
            <img className="share-img" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="share-cancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="share-bottom" onSubmit={submitHandler}>
          <div className="share-options-container">
            <label htmlFor="file" className="share-option">
              <PermMedia htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Photo or Video</span>
              <input 
                style={{display:"none"}} 
                type="file" 
                id="file" 
                accept=".png,.jpeg,.jpg" 
                onChange={(e) => setFile(e.target.files[0])} 
              />
            </label>
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
            <button className="share-button" type="submit">Share</button>
          </div>
        </form>
      </div>
    </div>
  )
}
