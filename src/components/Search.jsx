import React from 'react';

export const Search = props => {
    const [text, setText] = React.useState('');
    const [type, setType] = React.useState(null);
    const searchFunc = props.searchFunc;

    const inputHandler = e => {
        const type = e.target.type;

        switch(type) {
            case 'text':
                setText(e.target.value);
                break;
            case 'radio':
                setType(e.target.id === 'all' ? null : e.target.id);
                break;
            default:
                break;
        }
    };

    const submitHandler = e => {
        e.preventDefault();

        if(text) {
            searchFunc(text, type);
        }
    };

    return(
        <div className="row">
            <form onSubmit={ submitHandler }>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">search</i>
                  <input placeholder="search" type="text" name="text" value={ text } onChange={ inputHandler } className="validate"/>
                </div>
                <p className="col s-6">
                    <label>
                      <input name="type" id="all" type="radio" onChange={ inputHandler } checked={ type === null }/> 
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