const express = require("express")
const router = express.Router()
const subcategories = require("../index.js")

router.get('/categories/:category', (req, res, next) => {
  res.json(req.body)
})

module.exports = router