import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer className="main-footer">
                <div className="copyright">
                    © {new Date().getFullYear()} For Portfolio
                </div>
          </footer>
        )
    }
}

export default Footer;