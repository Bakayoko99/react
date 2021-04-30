
import React from 'react';

class Button extends React.Component{

    render(){
        return(
            <button className="btn btn-primary mt-3 ml-1 mb-2" onClick={this.props.clickButton}>{this.props.children}</button>
        )

    }
}

export default Button