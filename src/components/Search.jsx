import React from 'react';

import searchPic from './../img/magnifier.svg';

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
            <form className="search-form" onSubmit={ this.submitHandler }>
                <div className="field-row">
                    <input placeholder="Type Something And Press Search" type="text" name="text" value={ text } onChange={ this.inputHandler }/>
                    <div className="search-icon-wrap">
                        <img className="search-icon" src={ searchPic } alt="search"/>
                    </div>
                </div>
                <div className="field-col">
                    <label>
                        <input name="type" id="all" type="radio" onChange={ this.inputHandler } checked={ type === null }/> 
                        <span>All</span>
                    </label>
                    <label>
                        <input name="type" id="movie" type="radio" onChange={ this.inputHandler }/>
                        <span>Movie</span>
                    </label>
                    <label>
                        <input name="type" id="series" type="radio" onChange={ this.inputHandler }/>
                        <span>Series</span>
                    </label>
                    <label>
                        <input name="type" id="game" type="radio" onChange={ this.inputHandler }/>
                        <span>Video Game</span>
                    </label>
                </div>
                <div className="field-row">
                    <button className="btn" type="submit" name="action">
                         Search
                    </button>
                </div>
            </form>
        )
    }
}

export default Search;