import React from 'react';
import axios from 'axios';


import Preloader from "./Preloader";
import Error from "./Error";

import MovieList from "./../components/MovieList";
import Search from "./../components/Search";
import Pagination from "./../components/Pagination";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            isLoading: false,
            response: '',
            error: '',
            currentSearch: '',
            totalResults:'',
            currentPage: '',
            type: '',
        }

        this.sendRequest = this.sendRequest.bind(this);
    }

    sendRequest(search, type, page) {
        const getHttpsString = (search, type) => {
            let str = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`;
            
            if(type) {
                str += `&type=${type}`;
            }

            if(page) {
                str += `&page=${page}`;
            }

            return str;
        }

         this.setState({ isLoading: !this.state.isLoading })
            axios.get(getHttpsString(search,type))
            .then(response => response.data) 
            .then( data => {
                this.setState({
                    response: data.Response,
                    movies: data.Search,
                    isLoading: false,
                    error: data.Error,
                    totalResults: parseInt(data.totalResults),
                    currentSearch: search,
                    type: type ? type : '',
                    currentPage: !page ? 1 : +page,
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
        const { response, error, movies, isLoading, totalResults, currentSearch, currentPage, type } = this.state;

        return(
            <main className="container content">
                <Search searchFunc={ this.sendRequest }/>
                {  isLoading ? <Preloader/> : response === "True" ? <> <MovieList movies={movies}/> <Pagination type={ type } pageFunc={ this.sendRequest } searchText={ currentSearch } currentPage={ currentPage } countPage={ Math.ceil(totalResults / 10) }/> </> : error ? <Error error={ error }/> : <div className="message">Type something in search box</div> }
            </main>
        )
    }
}

export default Main;