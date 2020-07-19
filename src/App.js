import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import IdnPage from './pages/IdnPage'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/indonesia'>
          <IdnPage />
        </Route>
      </Switch>
    </>
  )
}

export default App
