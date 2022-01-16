const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRouter = require('./routes/auth')

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });
app.use('/api/auth', authRouter)

app.listen(process.env.NODE_PORT, () => {
  console.log(`${process.env.NODE_PORT} : is listening`)
})