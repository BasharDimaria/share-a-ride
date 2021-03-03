import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddTrip from './components/AddTrip';
import MinSida from './components/MinSida'
import BookedTrips from './components/BookedTrips'
import SearchForm from './components/SearchForm'






const App = () => {

  return (
  
    <Router>
      <Switch>
      <Route exact path="/search">
        <SearchForm></SearchForm>
      </Route>
      <Route exact path="/addtrip">
        <AddTrip></AddTrip>
      </Route>
      <Route exact path="/minsida">
        <MinSida></MinSida>
      </Route>
      <Route exact path="/bookedtrips">
        <BookedTrips></BookedTrips>
      </Route>
      </Switch>
    </Router>
    
  )

}
export default App;

