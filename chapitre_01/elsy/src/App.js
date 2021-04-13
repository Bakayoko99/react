
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
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
    this.onStepsChange= this.onStepsChange.bind(this)
    this.onHeartChange= this.onHeartChange.bind(this)
    this.onTempChange= this.onTempChange.bind(this)
  }

  onHeartChange(e){
    this.setState({
      heart: e.target.value 
      })}

  onStepsChange(e){
    this.setState({
      steps: e.target.value 
      })}

  onTempChange(e){
    this.setState({
      temperature: e.target.value 
      })}
    
  calculateWater(e){
    if(this.onTempChange > 20){

      this.setState({
        water: e.target.value + 0.02
      })
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* water */}
          <Box icon = "local_drink" color = "#3A85FF" value = {this.state.water} unit = "L" min = {1,5}></Box>
          {/* steps */}
          <Box icon = "directions_walk" color = "black" value = {this.state.steps} unit = "steps" onChange = {this.onStepsChange} min={stepsMin} max={stepsMax}></Box>
          {/* heart */}
          <Box icon = "favorite" color = "red" value = {this.state.heart} unit = "BPM" onChange = {this.onHeartChange} min={heartMin} max={heartMax}></Box>
          {/* Temperature */}
          <Box icon = "wb_sunny" color = "yellow" value = {this.state.temperature} unit = "°C" onChange = {this.onTempChange} min={tempMin} max={tempMax}></Box>
        </div>

      </div>
    );
  }
}

export default App;