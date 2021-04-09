import React from "react";
import Team from "./components/Team"
import Points from "./components/Points"
import './styles/teams.css';

function App() {
  return (
    <div className="App">
      <h1>Liste d'equipes de foot d'angleterre</h1>
      <Team color="red" name="Arsenal"></Team>
      <Points></Points>
      <Team color="red" name="Manchester United"></Team>
      <Points></Points>

      <Team color="blue" name="Manchester City"></Team>
      <Team color="white" name="Tottenham"></Team>
     
    </div>
  );
}

export default App;
