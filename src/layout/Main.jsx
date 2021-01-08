import React from 'react';
import axios from 'axios';


import { Preloader } from "./Preloader";
import { Error } from "./Error";

import { MovieList } from "./../components/MovieList";
import { Search } from "./../components/Search";
import { Pagination } from "./../components/Pagination";

const API_KEY = process.env.REACT_APP_API_KEY;

export const Main = props => {

    const [movies, setMovies] = React.useState(null);
    const [isLoading, setLoading] = React.useState(false);
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [totalResults, setTotalResults] = React.useState(null);
    const [currentPage, setCurrentPage] = React.useState(null);

    const onPage = React.useRef(null);


    const search = (search, type) => {
        onPage.current = page => {
            sendRequest(search, type, page); 
        };

        sendRequest(search, type);
    }

    const sendRequest = (search, type, page) => {
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

        setLoading(!isLoading);
        axios.get(getHttpsString(search, type))
        .then(response => response.data) 
        .then( data => {
            setResponse(data.Response);
            setMovies(data.Search);
            setError(data.Error);
            setTotalResults(+data.totalResults);
            setCurrentPage(!page ? 1 : +page);
            setLoading(false);
        }).catch( error => {
            setResponse(false);
            setError(error.message);
            setLoading(!isLoading);
        });
    }

    return (
        <main className="container content">
            <Search searchFunc={ search }/>
            {  isLoading ? <Preloader/> : response === "True" ? <> <MovieList movies={movies}/> <Pagination pageFunc={ onPage.current } currentPage={ currentPage } countPage={ Math.ceil(totalResults / 10) }/> </> : error ? <Error error={ error }/> : <div className="message">Type something in search box</div> }
        </main>
    );
};