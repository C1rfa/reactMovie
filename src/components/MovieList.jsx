import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {

    render() {
        const movies = this.props.movies.map(item => <MovieCard key={ item.imdbID } {...item}/>);

        return(
            <div className="movies">
                {movies}
            </div>
        );
    }
}

export default MovieList;
