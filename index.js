const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')

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

app.listen(process.env.NODE_PORT, () => {
  console.log(`${process.env.NODE_PORT} : is listening`)
})