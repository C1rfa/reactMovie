import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            type: null,
        };

        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }


    inputHandler(e) {
        const type = e.target.type;

        switch(type) {
            case 'text':
                this.setState({[e.target.name]: e.target.value});
                break;
            case 'radio':
                this.setState({type: e.target.id === 'all' ? null : e.target.id});
                break;
            default:
                break;
        }
    }

    submitHandler(e) {
        e.preventDefault();

        const { type, text } = this.state;

        if(text) {
            this.props.searchFunc(text, type);
        }
        
    }

    render() {

        const {text, type} = this.state;

        return(
            <div className="row">
                <form onSubmit={ this.submitHandler }>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">search</i>
                      <input placeholder="search" type="text" name="text" value={ text } onChange={ this.inputHandler } className="validate"/>
                    </div>
                    <p className="col s-6">
                        <label>
                          <input name="type" id="all" type="radio" onChange={ this.inputHandler } checked={ type === null }/> 
                          <span>All</span>
                        </label>
                    </p>
                    <p className="col s-6">
                        <label>
                          <input name="type" id="movie" type="radio" onChange={ this.inputHandler }/>
                          <span>Movie</span>
                        </label>
                    </p>
                    <p className="col s-6">
                        <label>
                          <input name="type" id="series" type="radio" onChange={ this.inputHandler }/>
                          <span>Series</span>
                        </label>
                    </p>
                    <p className="col s-6">
                        <label>
                          <input name="type" id="game" type="radio" onChange={ this.inputHandler }/>
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