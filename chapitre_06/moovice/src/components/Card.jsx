import React, { Component } from 'react';

class Card extends Component {
    render() {
        // console.log("card props: ", this.props);
        return (
            <div className="text-center">
                <h2>{this.props.title}</h2>
                <img src={'https://image.tmdb.org/t/p/w300/' + this.props.poster_path}/>
                <p>{this.props.release_date}</p>
                <p>{this.props.overview}</p>
            </div>
        );
    }
}

export default Card;
