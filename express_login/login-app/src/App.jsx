import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './views/Signup'
import Login from './views/Login'
import Admin from './views/Admin'


import './App.css';

function App() {
  return (
    <BrowserRouter>

      <nav>
        <ul className="d-flex flex-row">

          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Signup'>Signup</Link></li>
          <li><Link to='/Login'>Login</Link></li>
          <li><Link to='/Admin'>Admin</Link></li>
        </ul>
      </nav>


      <Switch>
        <Route exact path="/" />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
