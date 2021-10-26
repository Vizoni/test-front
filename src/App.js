import React from 'react'
import Header from './Components/Header'

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      {/* fix header at the top */}
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="bag" />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
