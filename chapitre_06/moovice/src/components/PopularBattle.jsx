import React, { Component } from 'react';
import Card from './Card';

class PopularBattle extends Component {

    state = {
        movies: [],
        indexFirstMovieOfCurrentBattle: 0
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769')
            .then(response => response.json())
            .then(data => {
                // console.log("popularBattle fetch data", data);
                this.setState({
                    movies: data.results
                })
            })

    }

    updateIndexMovieBattle = (movieId) => {
        console.log("updateIndexMovieBattle", typeof movieId);

        const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || []

        console.log("idsFavorites", idsFavorites);

        // if (!idsFavorites.find(elem => elem === movieId)) {
        if (!idsFavorites.includes(movieId)) {
            idsFavorites.push(movieId)

            localStorage.setItem("favorites", JSON.stringify(idsFavorites))
        }

        this.setState({
            indexFirstMovieOfCurrentBattle: this.state.indexFirstMovieOfCurrentBattle + 2
        })
    }


    renderTwoMovies() {
        const { indexFirstMovieOfCurrentBattle } = this.state

        return (
            <>
                <div className="col-6" style={{ cursor: "pointer" }}
                    onClick={() => this.updateIndexMovieBattle(this.state.movies[indexFirstMovieOfCurrentBattle].id)}>
                    <Card
                        title={this.state.movies[indexFirstMovieOfCurrentBattle].title}
                        poster_path={this.state.movies[indexFirstMovieOfCurrentBattle].poster_path}
                        release_date={this.state.movies[indexFirstMovieOfCurrentBattle].release_date}
                        overview={this.state.movies[indexFirstMovieOfCurrentBattle].overview}
                    />
                </div>
                <div className="col-6" style={{ cursor: "pointer" }}
                    onClick={() => this.updateIndexMovieBattle(this.state.movies[indexFirstMovieOfCurrentBattle + 1].id)}>
                    <Card
                        title={this.state.movies[indexFirstMovieOfCurrentBattle + 1].title}
                        poster_path={this.state.movies[indexFirstMovieOfCurrentBattle + 1].poster_path}
                        release_date={this.state.movies[indexFirstMovieOfCurrentBattle + 1].release_date}
                        overview={this.state.movies[indexFirstMovieOfCurrentBattle + 1].overview}
                    />
                </div>
            </>
        )
    }


    render() {

        console.log("popularBattle state indexFirstMovieOfCurrentBattle ",this.state.indexFirstMovieOfCurrentBattle);

        console.log("popularBattle state movies ", this.state.movies);
        return (
            <div>
                <h1 className="text-center" >Popular Battle</h1>

                {this.state.indexFirstMovieOfCurrentBattle > 19
                    ? <h3 className="text-center">Vous avez parcouru tous les films</h3>
                    : <div className="row">
                        {this.state.movies.length !== 0
                            ? this.renderTwoMovies()
                            : "Please wait until the movies are loaded"
                        }
                    </div>
                }



            </div>
        );
    }
}

export default PopularBattle;
