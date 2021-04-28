
import React from 'react';

class Button extends React.Component{

    render(){
        return(
            <button children="" onClick={this.props.clickButton}></button>
        )

    }
}

export default Button