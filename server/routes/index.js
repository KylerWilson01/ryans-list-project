const express = require("express")
const router = express.Router()
const conn = require('../db')

router.get("/categories", (req, res, next) => {
  const sql = `SELECT * FROM categories`

  let data = {}

  conn.query(sql, (err, results, fields) => {
    data.categories = results.filter(result => result.parent_id === null)

    data.categories.map(cat => {
      let subcat = results.filter(result => {
        if (cat.id === result.parent_id) {
          return result
        }
      })

      cat.subcat = subcat
    })

    res.json(data)
  })
})

module.exports = router
