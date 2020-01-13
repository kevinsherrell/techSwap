import React from 'react'
import hamburger from "../assets/images/hamburger.png"
import search from "../assets/images/search.png"
import location from "../assets/images/location.png"
import close from "../assets/images/close.png"

class Header extends React.Component {
    state = {
        initialBrowserWidth: window.innerWidth,
        browserWidth: 0,
        matches: window.matchMedia("max-width: 480px").matches,
        searchToggle: false,
        searchMenuFilter: false
    }

    componentDidMount() {
        /*reports width of the browser every time it is resized, then sets it to state "browserWidth*/
        window.addEventListener('resize', () => {
            this.setState({
                browserWidth: window.innerWidth
            })
            console.log(this.state.browserWidth)
        })
    }

    getBrowserWidth = () => {
        return window.innerWidth
    }
    toggleSearchMenu = () => {
        this.setState({
            searchToggle: !this.state.searchToggle,
            searchMenuFilter: false
        })
    }
    toggleSearchMenuFilter = () => {
        this.setState({
            searchMenuFilter: !this.state.searchMenuFilter
        })
    }

    render() {
        return (
            <header>
                {/*{this.state.matches && (<h1>THIS MEDIA QUERY MATCHES!!!</h1>)}*/}
                <nav className={`${this.state.searchToggle && "searchMenuTrue"}`}>

                    <form action="" className={`navForm`}>
                        {/*
                        Background for the search Menu
                        only shows when toggled
                        */}
                        <div className={`${!this.state.searchToggle && "hidden"} overlay`}></div>
                        <div className={`${this.state.searchToggle && "searchMenuTrue"} container`}>
                            <div className="mobileSearchTop">
                                <p className="logo"><strong>trad'r</strong>
                                </p>
                                <div className="closeImageWrapper" onClick={this.toggleSearchMenu}>
                                    <img src={close} alt=""
                                         className={`${!this.state.searchToggle && "hidden"} closeImage`}/>
                                </div>
                            </div>

                            <div className={"navSearchWrapper"}>
                                <input className={"navSearch"} type="text" placeholder={"Search"}
                                       onClick={
                                           !this.state.searchToggle && this.state.browserWidth < 480 ? this.toggleSearchMenu
                                               : !this.state.searchToggle && this.state.initialBrowserWidth < 480 && this.state.browserWidth < 480 ? this.toggleSearchMenu
                                               : undefined}/>
                                <img src={search} alt=""/>
                            </div>
                            <div className="hamburgerWrapper">
                                <img src={hamburger} alt=""
                                     className={`${this.state.searchToggle && "hidden"} hamburgerImage`}/>
                            </div>

                            <div className={`${!this.state.searchToggle && "hidden "} navLocationWrapper`}>
                                <input className={`navSearchLocation`} type="text" placeholder={"Location"}/>
                                <img src={location} alt=""/>
                            </div>

                            <ul className="bottomSearchMenu">
                                <li className="advancedSearch">Advanced Search</li>
                                <li className="advancedSearch">Search</li>
                            </ul>
                            <div className={`${!this.state.searchToggle && "hidden"} searchMenuControls`}>
                                <button type={"button"} onClick={this.toggleSearchMenuFilter}>Filter</button>
                                <button className={this.state.searchMenuFilter ? "hidden": undefined}>Search</button>
                            </div>
                            <button type="submit" className={"hidden"}>GO</button>
                            <div
                                className={`hidden ${this.state.searchMenuFilter ? "searchMenuFilterOn": undefined} filterOptions `}>
                                <div className="price">
                                    <p>Price</p>
                                    <div className="priceInput">
                                        <input type="text" placeholder={"Min"}/>
                                        <p>To</p>
                                        <input type="text" placeholder={"Max"}/>
                                    </div>

                                </div>
                                <div className="distance">
                                    <p>Distance</p>
                                    <div className="distanceInput">
                                        <input type="text" placeholder={"Miles"}/>
                                        <p>Mi.</p>
                                    </div>
                                </div>
                                <div className="sortBy">
                                    <p>Sort By</p>
                                    <select name="" id="">
                                        <option value="date">Date</option>
                                        <option value="priceLow">Price: low to high</option>
                                        <option value="priceHigh">Price: high to low</option>
                                        <option value="closest">Closest</option>
                                    </select>
                                </div>
                                <button className={!this.state.searchMenuFilter ? "hidden": undefined}>Search</button>
                            </div>
                        </div>

                    </form>
                    {/*<ul>*/}
                    {/*    <li>About</li>*/}
                    {/*    <li>List Item</li>*/}
                    {/*    <li>Browse</li>*/}
                    {/*    <li>Log in</li>*/}
                    {/*    <li>Sign up</li>*/}
                    {/*</ul>*/}


                </nav>

            </header>
        )
    }
}

export default Header;