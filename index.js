const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./routes/users.js')
const authRoute = require('./routes/auth.js')
const postRoute = require('./routes/posts')

dotenv.config()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)


app.listen(8800, () => {
  console.log("Backend server is running!")
})