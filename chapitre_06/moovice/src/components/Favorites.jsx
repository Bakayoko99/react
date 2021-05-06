import React, { Component } from 'react';

class Favorites extends Component {

        
    state = {
        movies: [],
        favIDs: this.getStorage()
    }

    getStorage(){
        return localStorage.getItem("favorites")

    }

    getMovie(id){
        fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=e441f8a3a151d588a4932d2c5d310769`)
        .then(response => response.json())
        .then(data => console.log("favorites getMovie data: ",data))
    }

    componentDidMount(){
        this.state.favIDs.map()
    }

    render() {
        console.log( "favorites localStorage.getItem: ",localStorage.getItem("favorites"));
        return (

            <div>
                <h1>Favorites</h1>

            </div>
        );
    }
}

export default Favorites;
