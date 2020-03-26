import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import IdnPage from './pages/IdnPage'

const App = () => {
  return(
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/indonesia">
        <IdnPage />
      </Route>
    </Switch>
  )
}

export default App;
