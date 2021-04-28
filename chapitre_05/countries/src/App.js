import React from 'react'
import './App.css';
import Button from './components/Button'

class App extends React.Component {
  constructor() {
    super();
    this.state = {

      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""

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
    fetch("https://restcountries.eu/rest/v2/name/" + country)
      .then(response => response.json())
      .then(result => {
        const countrieName = result[0].name;
        const countrieCap = result[0].capital;
        const countrieFlag = result[0].flag;
        const countriePopul = result[0].population;
        const countrieRegion = result[0].region;
        

        // this.setState({
        //   name: countrieName,
        //   capital: countrieCap,
        //   flag: countrieFlag,
        //   population: countriePopul,
        //   region: countrieRegion
        // })

        console.log(countrieName);

      })
  }


  render() {
    console.log("render");
    return (
      <div>
        <Button clickButton={this.getCountry("france")}>France</Button>
        <Button clickButton={this.getCountry("brazil")}>Brazil</Button>
        <Button clickButton={this.getCountry("croatia")}>Croatia</Button>


      </div>
    )

  }
}



export default App;
