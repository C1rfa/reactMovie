import React from 'react';
import logo from './../img/clapperboard.svg'

class Header extends React.Component {
    render() {
        return(
            <header className="main-header">
                <div className="brand">
                  <img src={ logo } alt="logo"/>
                  <span className="brand-text">React Movie App</span>
                </div>
                <div className="repo-link">
                  <a href="https://github.com/C1rfa/reactMovie">Repo</a>
                </div>
            </header>
        )
    }
}

export default Header;