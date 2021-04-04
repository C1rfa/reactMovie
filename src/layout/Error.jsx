import React from 'react';

import { MovieContext } from './../context';

import warningPic from './../img/warning.svg'



export const Error = props => {
    const { error } = React.useContext(MovieContext);
    return(
        <div className="message">
                <img src={ warningPic } alt="error"/>
                { error }
        </div>
    );
}