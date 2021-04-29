
import React from 'react';

class Card extends React.Component {

    render() {
        return (

            <div className="card">
                <img src={this.props.countryImg}></img>
                <div className="country-info">
                    <h4>Country: {this.props.countryName}</h4>
                    <h5>capital: {this.props.countryCap}</h5>
                    <p>Region: {this.props.countryReg}</p>
                    <p>Population: {this.props.countryPop}</p>
                </div>
            </div>
        )

    }
}

export default Card