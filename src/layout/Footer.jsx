import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer class="page-footer grey darken-4">
                <div class="footer-copyright">
                  <div class="container">
                      © {new Date().getFullYear()} For Portfolio
                  </div>
                </div>
          </footer>
        )
    }
}

export default Footer;