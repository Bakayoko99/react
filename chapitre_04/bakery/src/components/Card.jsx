
import React from 'react'


class Card extends React.Component {
    constructor(){
        super()
        this.state = {
            image: '../images/item.png'
        }
    }

    render() {

        return (

            <div>
                <div></div>
                <button> <img src={this.state.image} alt="image item"/></button>
            </div>

        )

    }
}