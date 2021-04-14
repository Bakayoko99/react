
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {

  render() {
    return (
      <div>
        <h1 style="text">Login</h1>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Email address</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter email..."></input>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Password</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter password..."></input>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck"></input>
          <label class="form-check-label" for="gridCheck">
            Remember me
                </label>
        </div>
        <div class="">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </div>

    )
  }

}

export default App;
