import React from 'react';

export const Error = props => {
    const { error } = props;
    return(
        <div className="message">
            <i className="material-icons large">error</i> 
            { error }
        </div>
    );
}