import React from 'react';
import ListAnItem from "./ListAnItem";
import ItemListing from "./ItemListing";

class Main extends React.Component {
    state = {
        items: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        catMenuOpened: false,
        browserWidth: window.innerWidth
    }
    handleCatMenu = () => {
        this.setState({
            catMenuOpened: !this.state.catMenuOpened
        })
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                browserWidth: window.innerWidth
            })
            console.log(this.state.browserWidth)
        })
    }

    render() {
        return (
            <div className="main">
                <div className="container flex">
                    <div className={`sidebar ${this.state.browserWidth < 1023 && 'hidden'}`}>
                        <h4>Categories: </h4>
                        <ul>
                            <li>Computers</li>
                            <li>Tablets</li>
                            <li>Phones</li>
                            <li>TVs</li>
                            <li>Video Games/Consoles</li>
                            <li>Appliances</li>
                            <li>Vehicle</li>
                        </ul>
                        <form className="searchUpdate flex">
                            <h4>Condition: </h4>
                            <ul>
                                <li><input type="radio" name={'condition'} value={'new'}/> New</li>
                                <li><input type="radio" name={'condition'} value={'used'}/> Used</li>
                                <li><input type="radio" name={'condition'} value={'damaged'}/> Damaged</li>
                                <li><input type="radio" name={'condition'} value={'broken'}/> Broken</li>
                            </ul>

                            <h4>Price: </h4>
                            <div className="priceInputSB">
                                <input type="text" placeholder={'min'}/> To <input type="text" placeholder={'max'}/>
                            </div>

                            <h4>Miles (from your location): </h4>
                            <div className="distanceInputSB">
                                <input type="text" placeholder={'miles'}/> from <input type="text" placeholder={'zip'}/>
                            </div>
                            <button>Update Search</button>
                        </form>
                    </div>
                    <div className={"content"}>
                        <section className="browse">
                            <div className="flex">
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
                            <div className="grid">
                                {this.state.items.map(item => <ItemListing/>)}
                            </div>
                        </section>
                    </div>

                </div>
                {this.state.browserWidth < 650 && (
                    <ListAnItem/>

                )}


            </div>
        )
    }
}

export default Main;

