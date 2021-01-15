import React from 'react';

import { MovieContext } from './../context';


export const Error = props => {
    const { error } = React.useContext(MovieContext);
    return(
        <div className="message">
            <i className="material-icons large">error</i> 
            { error }
        </div>
    );
}