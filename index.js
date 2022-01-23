const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const movieRouter = require('./routes/movie')
const listRouter = require('./routes/lists')

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/movie', movieRouter)
app.use('/api/list', listRouter)

app.listen(process.env.NODE_PORT, () => {
  console.log(`${process.env.NODE_PORT} : is listening`)
})