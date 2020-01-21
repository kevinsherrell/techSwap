import React from 'react';
import ListAnItem from "./ListAnItem";
import ItemListing from "./ItemListing";

class Main extends React.Component {
    state = {
        items: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        catMenuOpened: false
    }
    handleCatMenu = () => {
        this.setState({
            catMenuOpened: !this.state.catMenuOpened
        })
    }

    render() {
        return (
            <div className="main">
                <section className="browse">
                    <div className="container flex">
                        <div className={"categories"} onClick={this.handleCatMenu}>
                            <p>Sort/Filter: All <i
                                className="material-icons">keyboard_arrow_down</i></p>


                            <div className={`${this.state.catMenuOpened ? "categoryMenu" : "catMenuClosed"}`}>
                                <ul>
                                    <li>Computers</li>
                                    <li>Tablets</li>
                                    <li>Phones</li>
                                    <li>TVs</li>
                                    <li>Appliances</li>
                                    <li>Vehicles</li>
                                </ul>
                            </div>
                        </div>


                        <p className={"listingsNear"}>Listings near you</p>

                    </div>

                </section>
                <section className="listings">
                    <div className="container grid">
                        {this.state.items.map(item => <ItemListing/>)}
                    </div>
                </section>
                <ListAnItem/>
            </div>
        )
    }
}

export default Main;

