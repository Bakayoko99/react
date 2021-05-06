import React, { Component } from 'react';
import Card from './Card'

class Popular extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769')
            .then(response => response.json())
            .then(data => {
                // console.log("popular data componentDidMount: ",data);
                this.setState({
                    movies: data.results
                })
            })
    }

    render() {
        // console.log("popular state movies: ", this.state.movies[0]);
        return (
            <div>
                <h1>Popular</h1>

                <ul>
                    {this.state.movies.map((elem) => {
                        return <Card {...elem}/>
                    })}
                </ul>

            </div>
        );
    }
}
 
export default Popular;
