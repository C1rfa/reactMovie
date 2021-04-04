import React from 'react';

import { MovieContext } from './../context';

import searchPic from './../img/magnifier.svg';


export const Search = props => {
    const { searchText, searchType, changeSearchText, changeSearchType, sendRequest } = React.useContext(MovieContext);

    const inputHandler = e => {
        const type = e.target.type;

        switch(type) {
            case 'text':
              changeSearchText(e.target.value);
              break;
            case 'radio':
              changeSearchType(e.target.id === 'all' ? null : e.target.id);
              break;
            default:
                break;
        }
    };

    const submitHandler = e => {
        e.preventDefault();

        if(searchText) {
          sendRequest();
        }
    };

    return(
    <form className="search-form" onSubmit={ submitHandler }>
      <div className="field-row">
          <input placeholder="Type Something And Press Search" type="text" name="text" value={ searchText } onChange={ inputHandler }/>
          <div className="search-icon-wrap">
              <img className="search-icon" src={ searchPic } alt="search"/>
          </div>
      </div>
      <div className="field-col">
          <label>
              <input name="type" id="all" type="radio" onChange={ inputHandler } checked={ searchType === null }/> 
              <span>All</span>
          </label>
          <label>
              <input name="type" id="movie" type="radio" onChange={ inputHandler }/>
              <span>Movie</span>
          </label>
          <label>
              <input name="type" id="series" type="radio" onChange={ inputHandler }/>
              <span>Series</span>
          </label>
          <label>
              <input name="type" id="game" type="radio" onChange={ inputHandler }/>
              <span>Video Game</span>
          </label>
      </div>
      <div className="field-row">
          <button className="btn" type="submit" name="action">
               Search
          </button>
      </div>
    </form>
  );
};