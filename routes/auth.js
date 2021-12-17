const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')

//register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(16)
    //grabs user defined password from http post request and generates new hashed password
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    })

    const user = await newUser.save() //save user to db
    res.status(200).json(user) //return response status
  } catch(err) { //error handling
    res.status(500).json(err)
  }
})

//login
router.post("/login", async (req, res) => {
  try {
    //find user in db
    const user = await User.findOne({email: req.body.email})
    if (!user) {
      res.status(404).json("user not found")
    } else { //if user found, validates password
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      if (!validPassword) {
        res.status(400).json("wrong password")
      } else {
        res.status(200).json(user)
      }
    }
  } catch(err) { //error handling
    res.status(500).json(err)
  }
})

module.exports = router