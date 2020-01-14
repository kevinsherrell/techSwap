import React from 'react';
import Main from "./components/mainPage/Main"
import ListingPage from "./components/listingPage/ListingPage"
import Dashboard from './components/dashboard/Dashboard'
//components
import Header from './components/Header'

function App() {
    return (
        <div className="App">
            <Header/>
             <ListingPage/>
        </div>
    );
}

export default App;
