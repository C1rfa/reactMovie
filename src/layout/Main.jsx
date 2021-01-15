import React from 'react';

import { MovieContext } from './../context';

import { Preloader } from "./Preloader";
import { Error } from "./Error";

import { MovieList } from "./../components/MovieList";
import { Search } from "./../components/Search";
import { Pagination } from "./../components/Pagination";

export const Main = props => {
    const { isLoading, response, error } = React.useContext(MovieContext);

    return (
        <main className="container content">
            <Search/>
            {  isLoading ? 
                <Preloader/> : response === "True" ? 
                                <> <MovieList/> <Pagination/> </> 
                                : error ? 
                                    <Error/> 
                                    : <div className="message">Type something in search box</div> }
        </main>
    );
};