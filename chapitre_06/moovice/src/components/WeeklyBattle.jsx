import React, { Component, useState, useEffect } from 'react';
import moment from 'moment';

import Card from './Card'

const WeeklyBattle = () => {

    // state = {
    //     movies: [],
    //     indexFirstMovieOfCurrentBattle: 0
    // }

    const [movies, setMovies] = useState([]);
    const [indexFirstMovieOfCB, setIndexFirstMovieOfCB] = useState(0);


    useEffect(() => {

        const LAST_WEEK = moment().subtract(1, 'week').format("YYYY-MM-DD")
        const TODAY = moment().format("YYYY-MM-DD")

        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=e441f8a3a151d588a4932d2c5d310769`)
            .then(response => response.json())
            .then(data => {
                // console.log("popularBattle fetch data", data);
                // this.setState({
                //     movies: data.results
                // })
                setMovies(data.results)
            })

    })

    const updateIndexMovieBattle = (movieId) => {

        const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || []
        console.log("updateIndexMovieBattle", typeof movieId);

        // localStorage.setItem("favorites", movieId)

        // const llo = movies.filter((elem)=> {
        //     if (elem.id == movieId){
        //         return elem
        //     }})
        if (!idsFavorites.includes(movieId)) {
            idsFavorites.push(movieId)

            localStorage.setItem("favorites", JSON.stringify(idsFavorites))
        }

        // setidsFavorites(idsFavorites.push(...idsFavorites, llo[0].id))

        // localStorage.setItem("favorites", idsFavorites)
        // console.log("movies map: ",llo)
        // console.log("llo id: ",llo[0].id)


        console.log("localStorage.setItem(favorites,)", localStorage.getItem("favorites"));
        // setidsFavorites([...movieId, movieId])

        console.log("idsFavorites", idsFavorites);

        setIndexFirstMovieOfCB(indexFirstMovieOfCB + 1)

        // // if (!idsFavorites.find(elem => elem === movieId)) {
        // if (!idsFavorites.includes(movieId)) {
        //     idsFavorites.push(movieId)

        //     localStorage.setItem("favorites", JSON.stringify(idsFavorites))
        // }

        // this.setState({
        //     indexFirstMovieOfCurrentBattle: this.state.indexFirstMovieOfCurrentBattle + 2
        // })
    }


    const renderTwoMovies = () => {
        // const { indexFirstMovieOfCurrentBattle } = this.state

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




    return (
        <div>
            <h1 className="text-center" >Weekly Battle</h1>

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

export default WeeklyBattle;
