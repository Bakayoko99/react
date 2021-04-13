
import React from "react";
import './App.css';
import Box from "./components/Box";
import './styles/global.css'

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }
  myFunction=(e)=>{
    // console.log(val);
    this.setState({
      heart: e.target.value, 
      steps: e.target.value  })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* water */}
          <Box icon = "local_drink" color = "#3A85FF" value = {1.5} unit = "L"></Box>
          {/* steps */}
          <Box icon = "directions_walk" color = "black" value = {this.state.steps} unit = "steps" onStepsChange = {this.myFunction}></Box>
          {/* heart */}
          <Box icon = "favorite" color = "red" value = {this.state.heart} unit = "BPM" onHeartChange = {this.myFunction} min={heartMin} max={heartMax}></Box>
          {/* Temperature */}
          <Box icon = "wb_sunny" color = "yellow" value = {-10} unit = "°C"></Box>
          <p>Steps : {stepsMin}</p>
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p> 
        </div>

      </div>
    );
  }
}

export default App;