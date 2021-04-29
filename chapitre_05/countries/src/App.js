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
  
  getCountry(country) {
    console.log("getcountry essay: ",this.state.input);
    fetch("https://restcountries.eu/rest/v2/name/" + this.state.input)
      .then(response => response.json())
      .then(result => {
        const countrieName = result[0].name;
        const countrieCap = result[0].capital;
        const countrieFlag = result[0].flag;
        const countriePopul = result[0].population;
        const countrieRegion = result[0].region;


        this.setState({
          name: countrieName,
          capital: countrieCap,
          flag: countrieFlag,
          population: countriePopul,
          region: countrieRegion
        })


      })
  }

  handleUsername(e){
    this.setState({
      input: e.target.value

    })
  }


  render() {
    console.log("render");
    console.log("input: ", this.state.input);
    return (

      <div>

        <input class="form-control" type="text" placeholder="Enter country" onChange={(e)=> this.handleUsername(e)} ></input>
        <Button clickButton={() => this.getCountry("france")} children="France"></Button>
        <Button clickButton={() => this.getCountry("brazil")} children="Brazil"></Button>
        <Button clickButton={() => this.getCountry("croatia")} children="Croatia"></Button>
        <Card countryImg={this.state.flag} countryName={this.state.name} countryCap={this.state.capital} countryReg={this.state.region} countryPop={this.state.population}></Card>

      </div>

    )

  }
}



export default App;

