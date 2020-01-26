import React from 'react';
import Main from "./components/mainPage/Main"
import ListingPage from "./components/listingPage/ListingPage"
import Dashboard from './components/dashboard/Dashboard'
//components
import Header from './components/header/Header'

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            {/*<ListingPage/>*/}
        </div>
    );
}

export default App;
