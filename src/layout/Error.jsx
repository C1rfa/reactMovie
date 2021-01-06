import React from 'react';

class Error extends React.Component {
    render() {
        const { error } = this.props;
        return(
            <div className="message">
                <i className="material-icons large">error</i> 
                { error }
            </div>
        )
    }
}

export default Error;