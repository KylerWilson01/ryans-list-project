const express = require("express")
const router = express.Router()
const conn = require('../db')



router.get("/categories", (req, res, next) => {
  const sql = `SELECT * FROM categories;`
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

router.get('/categories/:slug/:id', (req, res, next) => {
  const slug = `${req.params.slug}`

  let data = {}

  const sql = `
  SELECT c.\`name\`, l.listingname, c.slug, l.id, l.subcat_id, l.time_created
  FROM categories c 
  RIGHT JOIN listings l 
  ON c.id = subcat_id
  WHERE c.slug = ?;`

  conn.query(sql, [slug], (err, results, fields) => {
    data.listings = results
    res.json(data.listings)
  })
})

router.get('/categories/:listingid', (req, res, next) => {
  const listing = `${req.params.listingid}`

  const sql = `SELECT * FROM listings l WHERE l.id = ?;`

  conn.query(sql, [listing], (err, results, fields) => {
    res.json(results)
  })
})

router.post('/categories', (req, res, next) => {
  const form = req.body
  const sql = `INSERT INTO listings (listingname, subCat_id, \`desc\`, city, state, price) VALUES (?, ?, ?, ?, ?, ?)`

  conn.query(sql, [form.title, form.subCat_id, form.desc, form.city, form.state, form.price], (err, results, fields) => {
    res.json(results)
  })
})



module.exports = router
