import React from 'react';

//Components
import { Header } from './layout/Header';
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";

import { ContextProvider } from './context';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                    <ContextProvider>
                        <Main/>
                    </ContextProvider>
                <Footer/>
            </div>
        )
    }
}

export default App;