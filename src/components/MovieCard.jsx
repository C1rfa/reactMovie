import React from 'react';

export const MovieCard = props => {
    const { Title: title, 
        Year: year, 
        Type: type, 
        Poster: poster, 
        imdbID 
    }  = props;

    return(
        <div className="movie-card">
            <div className="movie-card-content">
                <div className="movie-card-front">
                    <img src={ poster !== 'N/A' ? poster : `https://via.placeholder.com/300x450?text=${title}` } alt={ title }/>
                </div>
                <div className="movie-card-back">
                    <span className="movie-card-title">{ title }</span>
                    <p>Year: { year }</p>
                    <p>Type: { type }</p>
                    <a className="btn btn--movie-card" href={ `https://www.imdb.com/title/${imdbID}` } target="_blank" rel="noreferrer">
                        Open IMDB page
                    </a>
                </div>
            </div>
        </div>
    );
};
