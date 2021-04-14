
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Input from "./components/Input"


class App extends React.Component {

  render() {
    return (
      <div class= "col-6 offset-3">

        <h1>Login</h1>

        <div class="mb-3">
        <Input for="formGroupExampleInput" type="text" textInside="Email address" id="formGroupExampleInput" classNameInput="form-control" classNameLabel= "form-label" placeholder="Enter email..." ></Input>
        </div>

        <div class="mb-3">
        <Input for="formGroupExampleInput" type="text" id="formGroupExampleInput" classNameInput="form-control" classNameLabel= "form-label" textInside="Password" placeholder="Enter password..." ></Input>
        </div>

        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="gridCheck"></input>
          <label class="form-check-label" for="gridCheck">
            Remember me
          </label>
        </div>

        <div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>

      </div>

    )
  }

}

export default App;
