
import React from "react";

class Points extends React.Component{
    render(){
        return(
            <button onClick={()=>{
                this.setState({ points: this.state.points + 1})
            }}>Add 1 point</button>
        )
    }
}


export default Points;

