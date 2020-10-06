import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UserWorkDetails from './Components/UserWorkDetails/UserWorkDetails';
import Admin from './Components/Admin/Admin';
import Addevent from './Components/Addevent/Addevent';
import Notfound from './Components/Notfound/Notfound';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/register/:name">
          <Register></Register>
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/userworkdetails">
          <UserWorkDetails></UserWorkDetails>
        </PrivateRoute>
        <PrivateRoute path="/addevent">
          <Addevent></Addevent>
        </PrivateRoute>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;