const express = require('express')
const app = express()

app.listen(8000, function () {
  console.log('I am listening on port 8000')
})

module.exports = app