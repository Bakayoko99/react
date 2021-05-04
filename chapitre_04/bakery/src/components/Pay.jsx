
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

        this.handleSelect = this.handleSelect.bind(this)
    }

    

    handleSelect(name, price){

        console.log("pay typeof price",typeof(parseInt(price) ));

        let tot = this.state.total + parseInt(price)
        let ecoTax = price +

        console.log("parametre handleSelect: ",name, price);
        this.setState({
            basket: [...this.state.basket, {name, price} ],
            total: tot,
            totalEcoTax: tot + 0.03

        })

    }

    render(){
        console.log("pay state basket: ",this.state.basket);
        console.log("pay state total: ",this.state.total);
        console.log("pay state totalEcoTax: ",this.state.totalEcoTax);
        console.log("pay props item: ", this.props.items);
        return(
            <div>

            <div items={this.props.items}>
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