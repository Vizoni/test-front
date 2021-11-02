import React from 'react'
import Header from './Components/Header'
import Bag from './Pages/Bag'
import Payment from './Pages/Payment'
import Confirmation from './Pages/Confirmation'

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      {/* fix header at the top */}
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="bag" />} />
        <Route exact path="/bag" component={Bag} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/confirmation" component={Confirmation} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
