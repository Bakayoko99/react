
import React, { Component, useState, useEffect } from 'react';
import moment from 'moment';
import Card from './Card';

const Weekly = () => {

    // state = {
    //     movies: []
    // }

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const LAST_WEEK = moment().subtract(1, 'week').format("YYYY-MM-DD")
        const TODAY = moment().format("YYYY-MM-DD")

        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=e441f8a3a151d588a4932d2c5d310769`)
        .then(response => response.json())
        .then(data => {
            console.log("weekly data componentDidMount: ",data);
            setMovies(data.results)
            // this.setState({
            //     movies: data.results
            // })
        })
    })
    
        let LAST_WEEK = moment().subtract(1, 'week').format("YYYY-MM-DD")
        let TODAY = moment().format("YYYY-MM-DD")
        console.log(LAST_WEEK, TODAY);
        console.log("weekly state movies",movies);
        return (
            <div>
                <h1>Weekly</h1>
                <ul>
                    {movies.map((elem) => {
                        return <Card {...elem}/>
                    })}
                </ul>
            </div>
        );
}

export default Weekly;
