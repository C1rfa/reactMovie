import React from 'react';
import axios from 'axios';

import { reducer } from './reducer';

export const MovieContext = React.createContext();

const initialState = {
    searchText: '',
    searchType: null,
    movies: null,
    response: null,
    error: null,
    totalResults: null,
    currentPage: null,
    isLoading: false,
};


export const ContextProvider = ({children}) => {
    const [value, dispatch] = React.useReducer(reducer, initialState);

    value.sendRequest = (page=1) => {
        const API_KEY = process.env.REACT_APP_API_KEY;

        const getHttpsString = () => {
            let str = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${value.searchText}`;
            
            if(value.searchType) {
                str += `&type=${value.searchType}`;
            }
    
            if(page) {
                str += `&page=${page}`;
            }
    
            return str;
        }
        
        dispatch({type: 'CHANGE_LOADING_STATUS', payload: { loading: !value.loadingStatus }});
        axios.get(getHttpsString())
        .then(response => response.data) 
        .then( data => {
            data.hasOwnProperty('Error') ? 
                dispatch({type: 'SET_ERROR', payload: { 
                    response: data.Response,
                    error: data.Error,
                }}) 
                : dispatch({type: 'SET_SEARCH_RESULTS', payload: { 
                    response: data.Response,
                    movies: data.Search,
                    totalResults: data.totalResults,
                    currentPage: page,
                 }});
        })
        .catch( error => {
            dispatch({type: 'SET_ERROR', payload: { 
                response: false,
                error: error.message,
            }}) 
        })
        .finally(() => {
            dispatch({type: 'CHANGE_LOADING_STATUS', payload: { loading: !!value.loadingStatus }});

        });
    };

    value.changeSearchText = text => {
        dispatch({type: 'CHANGE_SEARCH_TEXT', payload: { text: text }});
    };

    value.changeSearchType = type => {
        dispatch({type: 'CHANGE_SEARCH_TYPE', payload: { type: type }});
    };

    return (
        <MovieContext.Provider value={ value }>
            { children }
        </MovieContext.Provider>
    );
};