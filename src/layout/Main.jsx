import React from 'react';
import axios from 'axios';

import MovieList from "./../components/MovieList";
import Preloader from "./Preloader";
import Search from "./../components/Search";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            isLoading: true,
            response: '',
            apiKey: '2d4d6c82',
            error: '',
        }
    }

    componentDidMount() {
        axios.get(`http://www.omdbapi.com/?s=mad max&apikey=${this.state.apiKey}`)
            .then(response => response.data) 
            .then( data => {
                this.setState({
                    response: data.Response,
                    movies: data.Search,
                    isLoading: false,
                    error: data.Error,
                })
            }).catch( error => {
                this.setState({
                    isLoading: false,
                    response: false,
                    error: error.message,
                })
            });
    }


    render() {
        const { response, error, movies, isLoading } = this.state;

        return(
            <main className="container content">
                <Search/>
                {  isLoading? <Preloader/> : response === "True" ? <MovieList movies={movies}/> : <span><i className="material-icons large">error</i>{error}</span> }
            </main>
        )
    }
}

export default Main;