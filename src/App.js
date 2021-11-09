import React, { lazy, Suspense } from 'react'
import Header from './Components/Header'

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const BagPage = lazy(() => import('./Pages/Bag'))
const PaymentPage = lazy(() => import('./Pages/Payment'))
const ConfirmationPage = lazy(() => import('./Pages/Confirmation'))

const App = () => {
  return (
    <BrowserRouter>
      {/* fix header at the top */}
      <Header />

      <Switch>
        <Suspense fallback={<div>Loading Page...</div>}>
          <Route exact path="/bag" component={BagPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/confirmation" component={ConfirmationPage} />
        </Suspense>
        <Route exact path="/" render={() => <Redirect to="bag" />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
