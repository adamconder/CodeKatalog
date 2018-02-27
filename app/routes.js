const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/help', function (req, res) {
  res.render('help')
})

// Add your routes here - above the module.exports line

module.exports = router
