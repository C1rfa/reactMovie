import React from 'react';

import { MovieContext } from './../context';

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
        <div className="row">
            <form onSubmit={ submitHandler }>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">search</i>
                  <input placeholder="search" type="text" name="text" value={ searchText } onChange={ inputHandler } className="validate"/>
                </div>
                <p className="col s-6">
                    <label>
                      <input name="type" id="all" type="radio" onChange={ inputHandler } checked={ searchType === null }/> 
                      <span>All</span>
                    </label>
                </p>
                <p className="col s-6">
                    <label>
                      <input name="type" id="movie" type="radio" onChange={ inputHandler }/>
                      <span>Movie</span>
                    </label>
                </p>
                <p className="col s-6">
                    <label>
                      <input name="type" id="series" type="radio" onChange={ inputHandler }/>
                      <span>Series</span>
                    </label>
                </p>
                <p className="col s-6">
                    <label>
                      <input name="type" id="game" type="radio" onChange={ inputHandler }/>
                      <span>Video Game</span>
                    </label>
                </p>
              </div>
              <div className="row">
                    <button className="red btn waves-effect waves-light col s12" type="submit" name="action">
                        Search
                        <i className="material-icons right">search</i>
                    </button>
              </div>
            </form>
        </div>
    );
};