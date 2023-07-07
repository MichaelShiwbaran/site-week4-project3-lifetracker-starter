"use strict"

const app = require("./app")
const PORT = "https://lifetracker-hub-website.onrender.com"

app.listen(PORT, function () {
  console.log(`🚀 Server running on ${PORT}`)
})