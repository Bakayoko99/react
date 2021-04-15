
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Input from "./components/Input"


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChangeMail(e) {

    this.setState({
      email: e.target.value
    })
  }

  isValidMail() {

    if (this.state.email.length > 3) {
        return "is-valid"
    }else{
      return "is-invalid"
    }
  }

  render() {
    return (
      <div class="col-6 offset-3">

        <h1>Login</h1>

        <div class="mb-3">
          <Input type="text" onChange={this.isValidMail} textInside="Email address" classNameInput={"form-control"+" "+ this.isValidMail()} classNameLabel="form-label" placeholder="Enter email..." ></Input>
        </div>

        <div class="mb-3">
          <Input  type="text" classNameInput={"form-control"}  classNameLabel="form-label" textInside="Password" placeholder="Enter password..." ></Input>
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
