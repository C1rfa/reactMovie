import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer className="page-footer grey darken-4">
                <div className="footer-copyright">
                  <div className="container">
                      © {new Date().getFullYear()} For Portfolio
                  </div>
                </div>
          </footer>
        )
    }
}

export default Footer;