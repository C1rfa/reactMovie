import React from 'react';

class Preloader extends React.Component {

    render() {
        return(
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        )
    }
}

export default Preloader;