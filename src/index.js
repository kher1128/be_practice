const express = require('express')
const app = express()
const winston = require('winston')

require("dotenv").config({ path: '../.env' });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.NODE_PORT, () => {
  winston.info(`
    ################################################
    🛡️  Server listening on port: ${process.env.NODE_PORT} 🛡️
    ################################################
  `);
}).on('error', err => {
  winston.error(err);
  process.exit(1);
});