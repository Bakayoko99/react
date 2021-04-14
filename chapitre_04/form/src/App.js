
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Input from "./components/Input"


class App extends React.Component {

  render() {
    return (
      <div class= "col-6 offset-3">
        <h1>Login</h1>

        <Input for="formGroupExampleInput" type="text" id="formGroupExampleInput" placeholder="Enter email..." ></Input>
        <Input for="formGroupExampleInput" type="text" id="formGroupExampleInput" placeholder="Enter password..." ></Input>

        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Email address</label>
          <input type="text" class="form-control" id="formGroupExampleInput" ></input>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Password</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" ></input>
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
