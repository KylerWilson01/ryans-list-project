import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./Home"
import Subcat from "./Subcat"

export default props => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:slug" component={Subcat} />
    </Router>
  )
}
