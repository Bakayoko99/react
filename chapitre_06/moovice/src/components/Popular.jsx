import React, { Component, useState, useEffect } from 'react';
import Card from './Card'

const Popular = () => {



    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769')
            .then((response) => {
                return  response.json()
            })
            .then((data) => {

                // return console.log("popular data componentDidMount: ", data.results);
                return setMovies(data.results)
                // this.setState({
                //     movies: data.results
                // })
                // console.log("response json useE: ", response.json()),
                
            })

    }, []);

    console.log("movies: ", movies);
    // console.log("popular state movies: ", this.state.movies[0]);
    return (
        <div>
            <h1>Popular</h1>

            <ul>
                {movies.map((elem) => {
                    return <Card {...elem} />
                })}
            </ul>

        </div>
    );

}

export default Popular;
