const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')

//update user
router.put("/:id", async (req, res) => { //put, because it is an updating process
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) { //if user try to update password
      try {
        //hash new user defined password
        const salt = await bcrypt.genSalt(16)
        req.body.password = await bcrypt.hash(req.body.password, salt)
      } catch(err) { //error handling
        return res.status(500).json(err)
      }
    }
    //update user info
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set:req.body //auto sets all input inside req.body
      })
      res.status(200).json("account has been updated")
    } catch(err) { //error handling
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json("you can update only your account")
  }
})

//delete user
router.delete("/:id", async (req, res) => { //delete process
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    //update user
    try {
      const user = await User.findByIdAndDelete({ _id: req.params.id})
      res.status(200).json("account has been deleted successfully")
    } catch(err) { //error handling
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json("you can delete only your account")
  }
})

//get a user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    //limit data sent back from server (dont show password, etc.)
    const {password, updatedAt, ...other} = user._doc
    res.status(200).json(other) //sends info with exclusions
  } catch(err) {
    return res.status(500).json(err)
  }
})

//follow a user
router.put('/:id/follow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      //find user with this id
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)
      if (!user.followers.includes(req.body.userId)) { //if currentUser is not currently following user
        await user.updateOne({$push:{ followers: req.body.userId }}) //adds currentUser to user's followers
        await currentUser.updateOne({$push:{ followings: req.params.id }}) //adds user to currentUser's following list
        res.status(200).json("you are now following " + user.username)
      } else {
        res.status(403).json("you're already following this user")
      }
    } catch(err) {
      return res.status(500).json(err)
    }
  } else { //if same user
    res.status(403).json("you cannot follow yourself")
  }
}) //put, because a list in user will be updated

//unfollow a user
router.put('/:id/unfollow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      //find user with this id
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)
      if (user.followers.includes(req.body.userId)) { //if currentUser is currently following user
        await user.updateOne({$pull:{ followers: req.body.userId }}) //adds currentUser to user's followers
        await currentUser.updateOne({$push:{ followings: req.params.id }}) //adds user to currentUser's following list
        res.status(200).json("you have unfollowed " + user.username)
      } else {
        res.status(403).json("you're not following this user")
      }
    } catch(err) {
      return res.status(500).json(err)
    }
  } else { //if same user
    res.status(403).json("you cannot unfollow yourself")
  }
}) //put, because a list in user will be updated

module.exports = router