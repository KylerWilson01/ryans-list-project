import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./Home"
import Subcat from "./Subcat"
import Listing from "./Listing"
import Create from "./Create"

export default props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form/:slug/:id/create" component={Create} />
        <Route exact path="/:slug/:id" component={Subcat} />
        <Route exact path="/:slug/:id/:postid" component={Listing} />
      </Switch>
    </Router>
  )
}
