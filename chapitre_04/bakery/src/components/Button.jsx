
import React from 'react'

class Button extends React.Component{

    render(){
        return(
           <button className={this.props.isSelected} onClick={this.props.onClickButton} > {this.props.children} </button>
        )
    }
}

export default Button 