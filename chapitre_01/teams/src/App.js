import React from "react";
import Team from "./components/Team"
import './styles/teams.css';

function App() {
  return (
    <div className="App">
      <h1>Liste d'equipes de foot d'angleterre</h1>
      <Team color="red" name="Arsenal"></Team>
      <Team color="red" name="Manchester United"></Team>
      <Team color="blue" name="Manchester City"></Team>
      <Team color="white" name="Tottenham"></Team>
    </div>
  );
}

export default App;
