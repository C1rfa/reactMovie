import React from 'react';

class Preloader extends React.Component {

    render() {
        return(
            <div className="progress red">
                <div className="indeterminate"></div>
            </div>
        )
    }
}

export default Preloader;