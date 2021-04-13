
import React from "react";
import Team from './Team'

class Points extends React.Component{
    constructor(){
        super();
        this.state= { points: 0}
    }
    render(){
        return(
            <button onClick= {()=>{
                this.setState({ points: this.state.points + 1})
            }}>Add 1 point</button>
        )
    }
}


export default Points;

