import React from 'react';

//Components
import { Header } from './layout/Header';
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";

import { ContextProvider } from './context';

class App extends React.Component {
    render() {
        return(
            <>
                <Header/>
                    <ContextProvider>
                        <Main/>
                    </ContextProvider>
                <Footer/>
            </>
        )
    }
}

export default App;