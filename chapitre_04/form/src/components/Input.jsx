
import React from "react";

class Input extends React.Component{

    render(){
        console.log(this.props.textInside);
        return(

        <div>
            <label className={this.props.classNameLabel}>{this.props.textInside}</label>
            <input type={this.props.type} onChange={this.props.onChangeProps} className={this.props.classNameInput} placeholder={this.props.placeholder}></input>
        </div>
        )
    }
}

export default Input;