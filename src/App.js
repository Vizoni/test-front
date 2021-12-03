import React, { lazy, Suspense } from 'react'
import Header from './components/Header'

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const BagPage = lazy(() => import('./pages/Bag'))
const PaymentPage = lazy(() => import('./pages/Payment'))
const ConfirmationPage = lazy(() => import('./pages/Confirmation'))

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
          <Route exact path="/" render={() => <Redirect to="/bag" />} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}

export default App
