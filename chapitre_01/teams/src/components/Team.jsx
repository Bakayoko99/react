
import React from "react";
import Points from "./Points"

class Team extends React.Component{
    
    render(){
        return(
            <div>
                <h2 style={{color: this.props.color}}>Team is: {this.props.name}  and is color is: </h2>
                <h4>Amount of points is:</h4>
                <h4>Number of matches:</h4>
                <Points></Points>

                {/* <button>Add 1 point</button> */}
            </div>
        )
    }
}

export default Team