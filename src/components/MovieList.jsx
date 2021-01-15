import React from 'react';

import { MovieContext } from './../context';

import { MovieCard } from './MovieCard';

export const MovieList = props => {
    const { movies } = React.useContext(MovieContext);
    const moviesArr = movies.map(item => <MovieCard key={ item.imdbID } {...item}/>);

    return(
        <div className="movies">
            { moviesArr }
        </div>
    );
};
