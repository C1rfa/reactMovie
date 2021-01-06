import React from 'react';
import axios from 'axios';

import MovieList from "./../components/MovieList";
import Preloader from "./Preloader";
import Error from "./Error";
import Search from "./../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            isLoading: false,
            response: '',
            error: '',
        }

        this.search = this.search.bind(this);
    }

    search(search, type) {
        const getHttpString = (search, type) => {
            let str = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`;
            
            if(type) {
                str += `&type=${type}`;
            }

            return str;
        }

        if(search) {
            this.setState({ isLoading: !this.state.isLoading })
            axios.get(getHttpString(search,type))
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
    }


    render() {
        const { response, error, movies, isLoading } = this.state;

        return(
            <main className="container content">
                <Search searchFunc={ this.search }/>
                {  isLoading ? <Preloader/> : response === "True" ? <MovieList movies={movies}/> : error ? <Error error={ error }/> : <div className="message">Type something in search box</div> }
            </main>
        )
    }
}

export default Main;