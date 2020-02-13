import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from "./components/mainPage/Main";
import ListingPage from "./components/listingPage/ListingPage";
import Dashboard from './components/dashboard/Dashboard';
//components
import Header from './components/header/Header';
import DataProvider, {DataContext} from "./context/dataProvider";
import {Provider} from 'react-redux'

import store from './store'

function App() {
    const {listingPageData, getListingById} = useContext(DataContext)
    // console.log(listingPageData)
    // console.log(!listingPageData && "listing page data does not exist")
    // console.log(listingPageData && "listing page data is available")

    return (
        <Provider store={store}>
            {/*<DataProvider>*/}
                <div className="App">
                    <Header/>
                    <Route exact path={"/"} component={Main}/>
                    <Route exact path={`/listing/:id`} component={ListingPage}/>

                </div>
            {/*</DataProvider>*/}
        </Provider>


    );
}

export default App;
