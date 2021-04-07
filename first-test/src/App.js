import React from "react";
import "./App.css";
import Button from "./Button";

class App extends React.Component {
  render() {
    return (
      <div >
        {/* <NavBar /> */}
        <h1> hey clique sur le bouton</h1>
        <Button />      
        <footer />
      </div>
    );
  }
}

export default App;