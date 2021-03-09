import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navigationbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddTrip from './components/AddTrip';
import MinSida from './components/MinSida'
import BookedTrips from './components/BookedTrips'
import SearchForm from './components/SearchForm'
import Karta from './components/Karta'


const App = () => {
  const testtrip={
      startLocation:57.7078,
      destination:11.9383
  }

  return (
  
    <Router>
      <NavigationBar />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
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
        <Route exact path="/karta">
        <Karta trip={testtrip} ></Karta>
      </Route>
      </Switch>
    </Router>
    
  )
}
export default App;

