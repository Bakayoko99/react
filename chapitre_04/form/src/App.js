
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
    this.handleChangeMail= this.handleChangeMail.bind(this)
    this.handleChangePsw= this.handleChangePsw.bind(this)
  }

  handleChangeMail(e){
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

  handleChangePsw(e){
    this.setState({
      password: e.target.value
    })
  }

  isValidPsw(){
    if(this.state.password.length > 5){
      return "is-valid"
    }else{
      return "is-invalid"
    }
  }


  render() {
    console.log();
    return (
      <div className="col-6 offset-3">

        <h1>Login</h1>

        <div className="mb-3">
          <Input type="text" onChangeProps={this.handleChangeMail} textInside="Email address" classNameInput={"form-control "+this.isValidMail()} classNameLabel="form-label" placeholder="Enter email..." ></Input>
        </div>

        <div className="mb-3">
          <Input type="text" onChangeProps={this.handleChangePsw} classNameInput={"form-control "+this.isValidPsw()}  classNameLabel="form-label" textInside="Password" placeholder="Enter password..." ></Input>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="gridCheck"></input>
          <label className="form-check-label" for="gridCheck"> 
            Remember me
          </label>
        </div>

        <div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>

      </div>

    )
  }

}

export default App;
