import React from 'react';
import warningPic from './../img/warning.svg'


class Error extends React.Component {
    render() {
        const { error } = this.props;
        return(
            <div className="message">
                <img src={ warningPic } alt="error"/>
                { error }
            </div>
        )
    }
}

export default Error;