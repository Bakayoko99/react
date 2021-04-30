import React from 'react'
import './App.css';
import Button from './components/Button'
import Card from './components/Card'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {

      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      input: ""

    }
    console.log("contructor");
  }
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(response => response.json())
      .then(result => {

        // console.log("result", result);
        const countrieName = result[0].name;
        const countrieCap = result[0].capital;
        const countrieFlag = result[0].flag;
        const countriePopul = result[0].population;
        const countrieRegion = result[0].region;
        // console.log("result name", countrieName);

        this.setState({
          name: countrieName,
          capital: countrieCap,
          flag: countrieFlag,
          population: countriePopul,
          region: countrieRegion
        })

      })

  }

  getCountry() {
    console.log("getcountry essay: ", this.state.input);
    fetch("http://localhost:8000/country/" + this.state.input)
      .then(response => response.json())
      .then(result => {
        console.log(result.country);
        const countrieName = result.country.name;
        const countrieCap = result.country.capital;
        const countrieFlag = result.country.flag;
        const countriePopul = result.country.population;
        const countrieRegion = result.country.region;


        this.setState({
          name: countrieName,
          capital: countrieCap,
          flag: countrieFlag,
          population: countriePopul,
          region: countrieRegion
        })


      })
  }

  handleCountryName(e) {
    this.setState({
      input: e.target.value

    })
  }


  render() {
    console.log("render");
    console.log("input: ", this.state.input);
    return (
      
      <div className="container">
        <div className="row">

          <div className="col-8 offset-4">
            <h1>Country selector</h1>
          </div>

        </div>
        <div className="row">
          <div className="col-6 offset-3">
            <p>Country</p>
            <input class="form-control" type="text" placeholder="Enter country" onChange={(e) => this.handleCountryName(e)} ></input>
            <Button clickButton={() => this.getCountry(this.state.input)} children="Search"></Button>
          </div>
        </div>

        <div className="row">
          <div className="col-3 offset-3">
            <Card countryImg={this.state.flag} countryName={this.state.name} countryCap={this.state.capital} countryReg={this.state.region} countryPop={this.state.population}></Card>
          </div>
        </div>
      </div>

    )

  }
}



export default App;

