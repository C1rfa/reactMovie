import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            movie: false,
            series: false,
            game: false,
        };

        this.inputHandler = this.inputHandler.bind(this);
    }


    inputHandler(e) {
        const type = e.target.type;

        switch(type) {
            case 'text':
                this.setState({[e.target.name]: e.target.value});
                break;
            case 'radio':
                this.setState({[e.target.id]: !this.state[e.target.id]});
                break;
            default:
                break;
        }
    }

    render() {

        const {text, movie, series, game} = this.state;

        return(
            <div className="row">
                <form>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">search</i>
                      <input placeholder="search" type="text" name="text" value={ text } onChange={ this.inputHandler } className="validate"/>
                    </div>
                    <p className="col s-6">
                        <label>
                          <input name="type" id="movie" type="radio" onChange={ this.inputHandler } checked={ movie }/>
                          <span>Movie</span>
                        </label>
                    </p>
                    <p className="col s-6">
                        <label>
                          <input name="type" id="series" type="radio" onChange={ this.inputHandler } checked={ series }/>
                          <span>Series</span>
                        </label>
                    </p>
                    <p className="col s-6">
                        <label>
                          <input name="type" id="game" type="radio" onChange={ this.inputHandler } checked={ game }/>
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
        )
    }
}

export default Search;