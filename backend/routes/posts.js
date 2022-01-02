const router = require('express').Router()
const Post = require('../models/Post')
const User = require('../models/User')

//create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch(err) {
    res.status(500).json(err)
  }
})

//update a post
router.put("/:id", async (req, res) => {
  try {
    //verify current user owns the post
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      //update post
      await post.updateOne({$set: req.body})
      res.status(200).json("post updated successfully")
    } else { //post is not owned by current user
    res.status(403).json("you can update only your posts")
    }
  } catch(err) { //if post does not exist
    res.status(404).json(err)
  }
})

//delete a post
router.delete("/:id", async (req, res) => {
  try {
    //verify current user owns the post
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      //update post
      await post.deleteOne({$set: req.body})
      res.status(200).json("post deleted successfully")
    } else { //post is not owned by current user
    res.status(403).json("you can delete only your posts")
    }
  } catch(err) { //if post does not exist
    res.status(404).json(err)
  }
})

//like and dislike a post
router.put("/:id/like", async (req, res) => {
  try { //find post and check if likes array of post includes user
    const post = await Post.findById(req.params.id)
    if (!post.likes.includes(req.body.userId)) { //if post is not already liked by current user
      await post.updateOne({$push: { likes: req.body.userId }})
      res.status(200).json("you have liked the post")
    } else {
      await post.updateOne({$pull: { likes: req.body.userId }})
      res.status(200).json("you have disliked the post")
    }
  } catch(err) {
    res.status(500).json(err)
  }
})

//get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch(err) {
    res.status(500).json(err)
  }
})

//get timeline posts
router.get('/timeline/:userId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId)
    const userPosts = await Post.find({ userId: currentUser._id })
    //get all friends posts
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId })
      })
    )
    //concat all friends posts with current users posts
    res.status(200).json(userPosts.concat(friendPosts))
  } catch(err) {
    res.status(500).json(err)
  }
})

//get user's all posts
router.get('/profile/:username', async (req, res) => {
  try {
    const user = await User.findOne({username:req.params.username})
    const posts = await Post.find({userId:user._id})
    res.status(200).json(posts)
  } catch(err) {
    res.status(500).json(err)
  }
})

module.exports = router