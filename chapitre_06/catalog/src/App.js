
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to='/1'>A Wrinkle in Time</Link></li>
              <li><Link to='/2'>The Strangers: Prey at Night</Link></li>
              <li><Link to='/3'>The Hurricane Heist</Link></li>
              <li><Link to='/4'>Gringo</Link></li>
              <li><Link to='/5'>Thoroughbreds</Link></li>
              <li><Link to='/6'>The Leisure Seeker</Link></li>
              <li><Link to='/7'>Black Panther</Link></li>
              <li><Link to='/8'>Red Sparrow</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route exact path='/'/>
            <Route path='/:id' />
            <Route/>
          </Switch>
        </div>
      
      </BrowserRouter>
    );
  }
}

export default App;

