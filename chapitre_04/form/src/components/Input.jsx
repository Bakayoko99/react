
import React from "react";

class Input extends React.Component{

    render(){
        return(

        <div>
            <label for={this.props.for} className="form-label">Email address</label>
            <input type={this.props.type} className="form-control" id={this.props.id} placeholder={this.props.placeholder}></input>
        </div>
        )
    }
}

export default Input;