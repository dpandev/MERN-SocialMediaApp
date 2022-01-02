import './Post.css'
import { MoreVert } from '@mui/icons-material'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const { user: currentUser } = useContext(UserContext) //use user as currentUser

  useEffect(() => { //check if user already likes post
    setIsLiked(post.likes.includes(currentUser._id))
  }, [currentUser._id, post.likes])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`)
      setUser(res.data)
    }
    fetchUser()
  }, [post.userId])

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="post-container">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <Link to={`profile/${user.username}`}>
              <img 
                className="post-profile-img" 
                src={user.profilePicture ? PF+user.profilePicture : PF+"person/defaultAvatar.png"}
                alt="" 
              />
            </Link>
            <span className="post-username">{user.username}</span>
            <span className="post-date">{post.createdAt}</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img src={PF+post.img} alt="" className="post-img" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src={`${PF}like.png`} alt="" className="post-reaction-icon" onClick={likeHandler} />
            <img src={`${PF}heart.png`} alt="" className="post-reaction-icon" onClick={likeHandler} />
            <span className="post-like-counter">{like} people like it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
