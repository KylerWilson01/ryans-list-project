const express = require("express")
const categoriesRoutes = require("./routes/index")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", categoriesRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
