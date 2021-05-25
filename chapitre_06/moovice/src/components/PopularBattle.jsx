import React, { Component, useEffect, useState } from 'react';
import Card from './Card';

const PopularBattle = () => {

    // state = {
    //     movies: [],
    //     favIndex: [],
    //     indexFirstMovieOfCurrentBattle: 0
    // }

    const [movies, setMovies] = useState([]);
    const [favIndex, setfavIndex] = useState([]);
    const [indexFirstMovieOfCB, setindexFirstMovieOfCB] = useState(0);

    useEffect(() => {
        if(movies.length == 0){

            fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769')
                .then(response => response.json())
                .then(data => {
                    setMovies(data.results)
                    // console.log("popularBattle fetch data", data);
                    // this.setState({
                    //     movies: data.results
                    // })
                })
        }

    })

    const updateIndexMovieBattle = (movieId) => {
        // useEffect((movieId) => {

        //    console.log( "localstorage",localStorage.getItem("favorites"));
        console.log("updateIndexMovieBattle", typeof movieId);

        const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || []

        console.log("idsFavorites", idsFavorites);

        // if (!idsFavorites.find(elem => elem === movieId)) {
        if (!idsFavorites.includes(movieId)) {
            idsFavorites.push(movieId)

            localStorage.setItem("favorites", JSON.stringify(idsFavorites))
        }


        //     // let idsFavorites = []
        //     let idsFavorites = JSON.parse(localStorage.getItem("favorites")) || []

        //     const moviesss = movieId

        //     console.log("idsFavorites", idsFavorites);

        //     if (!idsFavorites.find(elem => elem === movieId)) {


        // if (idsFavorites.(moviesss == true)) {
        //     idsFavorites = [...idsFavorites, moviesss]

        //     localStorage.setItem("favorites", JSON.stringify(idsFavorites))
        // }

        // this.setState({
        //     indexFirstMovieOfCurrentBattle: this.state.indexFirstMovieOfCurrentBattle + 2
        // })

        setindexFirstMovieOfCB(indexFirstMovieOfCB + 2)
    }
    // },[indexFirstMovieOfCB])


    const renderTwoMovies = () => {
        // useEffect(() => {
        // const { indexFirstMovieOfCurrentBattle } = this.state
        console.log("movies :", movies);
        return (
            <>
                <div className="col-6" style={{ cursor: "pointer" }}
                    onClick={() => updateIndexMovieBattle(movies[indexFirstMovieOfCB].id)}>
                    <Card
                        title={movies[indexFirstMovieOfCB].title}
                        poster_path={movies[indexFirstMovieOfCB].poster_path}
                        release_date={movies[indexFirstMovieOfCB].release_date}
                        overview={movies[indexFirstMovieOfCB].overview}
                    />
                </div>
                <div className="col-6" style={{ cursor: "pointer" }}
                    onClick={() => updateIndexMovieBattle(movies[indexFirstMovieOfCB + 1].id)}>
                    <Card
                        title={movies[indexFirstMovieOfCB + 1].title}
                        poster_path={movies[indexFirstMovieOfCB + 1].poster_path}
                        release_date={movies[indexFirstMovieOfCB + 1].release_date}
                        overview={movies[indexFirstMovieOfCB + 1].overview}
                    />
                </div>
            </>
        )
    }



    // console.log("JSON.parse(localStorage.getItem(favorites)" , JSON.parse(localStorage.getItem("favorites")));

    console.log("popularBattle state indexFirstMovieOfCB ", indexFirstMovieOfCB);

    console.log("popularBattle state movies ", movies);
    return (
        <div>
            <h1 className="text-center" >Popular Battle</h1>

            {indexFirstMovieOfCB > 19
                ? <h3 className="text-center">Vous avez parcouru tous les films</h3>
                : <div className="row">
                    {movies.length !== 0
                        ? renderTwoMovies()
                        : "Please wait until the movies are loaded"
                    }
                </div>
            }



        </div>
    );

}

export default PopularBattle;
