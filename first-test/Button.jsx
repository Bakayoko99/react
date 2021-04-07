
class Button extends React.Component{
    handleCkick(){
        console.log("click !");
    }
    render(){
        return(
            <button onClick={this.handleClick}> Click me !</button>
        )
    }
}

export default Button