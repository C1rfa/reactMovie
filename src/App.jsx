import React from 'react';

//Components
import Header from './layout/Header';
import Footer from "./layout/Footer";
import Main from "./layout/Main";

class App extends React.Component {
    render() {
        return(
            <div className="App">
                <Header/>
                    <Main/>
                <Footer/>
            </div>
        )
    }
}

export default App;