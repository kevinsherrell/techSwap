import React from 'react'
import hamburger from "../assets/images/hamburger.png"
import search from "../assets/images/search.png"
import location from "../assets/images/location.png"
import close from "../assets/images/close.png"

class Header extends React.Component {
    state = {
        browserWidth: window.innerWidth,
        searchToggle: false,
        searchMenuFilter: false,
        navMenuToggle: false
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
    toggleNavMenu = () => {
        this.setState({
            navMenuToggle: !this.state.navMenuToggle
        })
    }

    render() {
        console.log("Browser Width: " + this.state.browserWidth)

        return (
            <header>
                <nav>
                    <div className="container grid">
                        <h3>trad'r</h3>
                        <form action="" className={`navForm flex`}>
                            <div className={`searchInput ${this.state.searchToggle ? "hidden" : undefined}`}>
                                <input type="text" placeholder={"Search"}
                                       onClick={this.state.browserWidth < 767 && !this.state.searchToggle ? this.toggleSearchMenu : undefined}/>
                                <img src={search} alt="" className={"searchImage"}/>
                            </div>
                            <div className={`locationInput ${this.state.browserWidth < 767 && "hidden"}`}>
                                <input type="text" placeholder={"Location"}/>
                                <img src={location} alt=""/>
                                <button className={this.state.browserWidth < 767 ? "hidden" : undefined}>Search</button>

                            </div>

                        </form>
                        <ul className={`${this.state.browserWidth < 1024 ? "hidden" : "flex"} loginSignup`}>
                            {/*<li><a href="">How it works</a></li>*/}
                            <li className={"flex"}>
                                {/*todo -- if authenticated is true Sign up is hidden and log in becomes log out; An avatar  is then placed to the right of the page which will be a link to the dashboard*/}
                                <i className="material-icons">person_add</i>
                                <a href="">Sign up</a>
                            </li>
                            <li className={"flex"}>
                                <i className="material-icons">person</i>
                                <a href="">Log in</a>
                            </li>

                        </ul>
                        <i className={`material-icons ${this.state.browserWidth > 1023 && "hidden"} hamburger`}
                           onClick={this.toggleNavMenu}>menu</i>
                    </div>
                </nav>

                {/*Search Menu*/}

                <div className={`searchMenu ${!this.state.searchToggle && "hidden"}`}>
                    <div className="container grid">
                        <div className="searchMenuTop">
                            <h3>trad'r</h3>
                            <i className="material-icons" onClick={this.toggleSearchMenu}>close</i>
                        </div>
                        <form action="" className="searchMenuForm">
                            <div className="searchInput">
                                <input type="text" placeholder={"Search"}/>
                                <img src={search} alt=""/>
                            </div>
                            <div className="locationInput">
                                <input type="text" placeholder={"Location"}/>
                                <img src={location} alt=""/>
                            </div>
                            <div className="searchMenuControls">
                                <button type={"button"} onClick={this.toggleSearchMenuFilter}>Filter <i
                                    className="material-icons">{this.state.searchMenuFilter ? "keyboard_arrow_up" : "keyboard_arrow_down"}</i>
                                </button>
                                <button className={this.state.searchMenuFilter ? "hidden" : undefined}>Search</button>
                            </div>
                            <div className={`filterOptions ${!this.state.searchMenuFilter && "hidden"}`}>
                                <div className="price flex">
                                    <label>Price</label>
                                    <div className={"priceInput flex"}>
                                        $<input type="number" max={"999"} placeholder={"Min"}/>
                                        {/*<p>To</p>*/}
                                        $<input type="number" max={"999"} placeholder={"Max"}/>
                                    </div>
                                </div>
                                <div className="distance flex">
                                    <label>Distance</label>
                                    <div className="distanceInput flex">
                                        <input type="text" placeholder={"Miles"}/>
                                        {/*<p>mi.</p>*/}
                                    </div>
                                </div>
                                <div className="category flex">
                                    <label>Category</label>
                                    <select className={"categoryInput"}>
                                        <option value="computers">Computers</option>
                                        <option value="tablets">Tablets</option>
                                        <option value="phones">Phones</option>
                                        <option value="tvs">TVs</option>
                                        <option value="appliances">Appliances</option>
                                        <option value="vehicles">Vehicles</option>
                                    </select>
                                </div>
                                <div className="sortBy flex">
                                    <label>Sort by</label>
                                    <select className={"sortInput"}>
                                        <option value="date">Date</option>
                                        <option value="priceLow">Price: low to high</option>
                                        <option value="priceHigh">Price: high to low</option>
                                        <option value="Closest">Closest</option>
                                    </select>
                                </div>

                                <button>Search</button>
                            </div>
                        </form>
                    </div>
                </div>
                {/*Nav Menu*/}
                <div
                    className={`${this.state.browserWidth < 767 && this.state.navMenuToggle ? "navMenuOpen" : "navMenuClosed"}`}>
                    <ul>
                        <li>Sign up</li>
                        <li>Log in</li>
                        <li>FAQs</li>
                        <li>Help/Contact</li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;