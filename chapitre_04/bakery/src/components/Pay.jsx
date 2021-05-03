
import React from 'react'
import Card from './Card';

class Pay extends React.Component{

    constructor(){
        super();
        this.state = {
            basket: [],
            total: 0, 
            totalTVA: 0, 
            totalEcoTax: 0,
            totalTTC: 0
        }
    }

    handleSelect(name, price){

        console.log("parametre handleSelect: ",name, price);
        this.setState({
            basket: {name, price}
        })

    }

    render(){
        console.log("kkqjkjq: ", this.props.items);
        return(
            <div>

            <div items={this.props.items}>
                Pay
               { this.props.items.map((elem) => {
                    return <Card onClick={this.handleSelect} productName={elem.name} price={elem.price}></Card>
                })}
            </div>

            <p>{this.state.total}</p>

            </div>
        )
    }
}

export default Pay