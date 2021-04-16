import React from 'react'

class Add extends React.Component {
    constructor() {
        super()
        this.state = {
            productName: '',
            price: 1
        }

        this.updateProductName = this.updateProductName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)

    }

    updateProductName(e) {

        this.setState({
            productName: e.target.value
        })

    }

    updatePrice(e) {

        this.setState({
            price: e.target.value
        })

    }

    render() {
        console.log(this.state.productName, this.state.price);
        return (
            <div>
                Add
                <div class="input-group mb-3 col-12 offset- ">
                    <input type="text" class="form-control" placeholder="Item" onChange={this.updateProductName} ></input>
                    <button class="btn btn-primary" type="button" onClick={()=>this.props.onClickButton(this.state.productName, this.state.price)} >Add</button>
                </div>

                <div class="col-12 offset-">
                    <input id="inputRange" type="range" class="form-range" min="0" max="10" step="0.5" onChange={this.updatePrice} ></input>
                </div>
            </div>
        )
    }
}

export default Add