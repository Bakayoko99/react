
import React from 'react'

class Card extends React.Component {
    constructor(){
        super()
        this.state = {
            image: 'images/item.png'
        }
    }

    // 'http://localhost:3000/images/item.png'

    // componentDidMount(){
    //     fetch('https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/'+ this.props.productName)
    //     .then(reponse => reponse.blob())
    //     .then(result => {

    //         console.log("composant Card fetch result: ",result);

    //         const transformationResult = URL.createObjectURL(result)

    //         console.log("transformation: ",transformationResult);

    //         // this.setState({
    //         //     image: transformationResult
    //         // })
    //     })
    // }

    render() {
        console.log('composant card image chenge',this.state.image);
        return (

            <div>
                <button onClick={()=>this.props.onClick(this.props.productName, this.props.price)}> <img src={this.state.image} alt="image item"/></button>
            </div>

        )

    }
}

export default Card