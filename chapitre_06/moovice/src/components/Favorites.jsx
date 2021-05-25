import React, { Component, useEffect, useState } from 'react';
import Card from './Card';


const Favorites = () => {


    // state = {
    //     movies: [],
    //     favIDs: getStorage()
    // }
    const [movies, setMovies] = useState([])
    const [favIDs, setFavIDs] = useState([])

    useEffect(() => {


        const storage = getStorage()
        setFavIDs(storage)

    }, [])

    const getStorage = () => {
        // console.log('log getStorage: ',JSON.parse(localStorage.getItem("favorites")));
        return JSON.parse(localStorage.getItem("favorites")) || [];

    }
    // setFavIDs(getStorage)

    // console.log("getStorage", getStorage);

    const getMovie = (id) => {
        // console.log("id getMovie: ",id);
        fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=e441f8a3a151d588a4932d2c5d310769`)
            .then(response => response.json())
            .then(data => {
                // console.log("data getMovie: ",data);
                let newArray = [...movies, data];
                console.log("fetch new array : ",newArray)
                // newArray.push(data);
                // // console.log("newArray getMovie: ",newArray);
                setMovies(newArray)
            })

        // .then(data =>  this.setState({
        //     movies: [...this.state.movies, data]
    }





    useEffect(() => {

        favIDs.map((elem) => getMovie(elem))


        // console.log("favorites getMovie(): ", this.getMovie(460465));

        // // let moviesAdd = {}
        // for (let i = 0; i < this.state.favIDs.length; i++) {

        //     return console.log("drsgrdr",this.getMovie(this.state.favIDs[i])); 

        // }

        // console.log("favorites componentsDidMount moviesAdd: ", moviesAdd);
        // return this.setState({
        //     movies: [...this.state.movies, moviesAdd]
        // })
    }, [favIDs])
    // prova(){
    //     let ok = [331, 332, 333]
    //     console.log(ok.length);
    //     return ok.map((elem)=> elem + "0")
    //     // for(let i = 0; i <= ok.length; i = i+1){
    //     //     return i
    //     // }
    // }

    // console.log("favorites prova: ", this.prova());

    // console.log("favorites getMovie(): ", this.getMovie("460465"));
    // console.log("favorites state favIDs: ", favIDs);
    // console.log("favorites state favIDs map: ", favIDs.map((elem) => elem));
    console.log("favorites state movies: ", movies);
    console.log("taille movies: ", movies.length); 


    // console.log("favorites localStorage.getItem: ", localStorage.getItem("favorites"));
    return (

        <div>
            <h1>Favorites</h1>

            <ul>
                {movies.map((elem) => {
                    return <Card {...elem} />
                })}
            </ul>

        </div>

    );

}

export default Favorites;
