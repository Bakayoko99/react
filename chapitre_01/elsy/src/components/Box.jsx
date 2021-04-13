
import React from "react";

class Box extends React.Component{
    render() {
        if(this.props.icon === 'local_drink'){

            return(
                <div className="box col-sm-3 col-6">
                    <span class="material-icons"style={{ fontSize: 100, color: this.props.color}}>{this.props.icon}</span>
                    <p>{this.props.value} {this.props.unit}</p>
                </div>
            );
        }else{
            return(
                <div className="box col-sm-3 col-6">
                    <span class="material-icons"style={{ fontSize: 100, color: this.props.color}}>{this.props.icon}</span>
                    <p>{this.props.value} {this.props.unit}</p>
                    <input type="range" min={this.props.min} max={this.props.max} onInput= {this.props.onChange}></input>
                    </div>
            );
        }
    }
}

export default Box;