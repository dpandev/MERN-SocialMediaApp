import './Feed.css'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Share from '../Share/Share'
import Post from '../Post/Post'
import { UserContext } from '../../Context/UserContext'

export default function Feed({ username }) {
  const [posts, setPosts] = useState([])
  const { user } = useContext(UserContext)

  useEffect(() => {
    const res = {}
    const fetchPosts = async () => {
      const res = username 
        ? (await axios.get("/posts/profile/" + username)) 
        : (await axios.get("/posts/timeline/" + user._id))
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt)
        })
      )
    }
    fetchPosts()
  }, [username, user._id])
  return (
    <div className="feed-container">
      <div className="feed-wrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}
