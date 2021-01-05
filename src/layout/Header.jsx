import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <nav className="grey darken-4">
                <div className="nav-wrapper">
                  <a href="#!" className="brand-logo"><i className="material-icons large">local_movies</i>Movie App on React</a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Sass</a></li>
                  </ul>
                </div>
            </nav>
        )
    }
}

export default Header;