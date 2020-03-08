import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./Home"
import Subcat from "./Subcat"
import Listing from "./Listing"

export default props => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:slug/:id" component={Subcat} />
      <Route exact path="/:slug/:id/:postid" component={Listing} />
    </Router>
  )
}
