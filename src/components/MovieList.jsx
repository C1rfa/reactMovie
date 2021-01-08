import React from 'react';

import { MovieCard } from './MovieCard';

export const MovieList = props => {
    const movies = props.movies.map(item => <MovieCard key={ item.imdbID } {...item}/>);

    return(
        <div className="movies">
            {movies}
        </div>
    );
};
