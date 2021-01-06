import React from 'react';

class MovieCard extends React.Component {
    render() {
        const { Title: title, 
                Year: year, 
                Type: type, 
                Poster: poster, 
                imdbID 
            }  = this.props;

        return(
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" alt={ title } src={ poster !== 'N/A' ? poster : `https://via.placeholder.com/300x450?text=${title}` }/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{ title }</span>
                  <div className="section">
                        <p>Year: { year }</p>
                        <p>Type: { type }</p>
                  </div>
                  <div className="section">
                        <a className="grey darken-4 waves-effect waves-light btn-large" target="_blank" rel="noopener noreferrer" href={ `https://www.imdb.com/title/${imdbID}` }>View at IMDB</a>
                  </div>
                </div>  
            </div>
        );
    }
}

export default MovieCard;
