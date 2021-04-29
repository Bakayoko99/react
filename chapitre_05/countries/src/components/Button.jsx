
import React from 'react';

class Button extends React.Component{

    render(){
        return(
            <button className="btn btn-primary m-4" onClick={this.props.clickButton}>{this.props.children}</button>
        )

    }
}

export default Button