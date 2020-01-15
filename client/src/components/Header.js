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
        console.log(this.phone)

        return (
            <header>
                <nav className={`${this.state.searchToggle && "searchMenuTrue"}`}>
                    <div className="container grid">
                        <h3>trad'r</h3>
                        <form action="" className={`navForm flex`}>
                            <div className="navSearch" onClick={!this.state.searchToggle ? this.toggleSearchMenu: undefined}>
                                <input type="text"  placeholder={"Search"}
                                       disabled={this.state.browserWidth < 480 && "disabled"}/>
                                <img src={search} alt="" className={"searchImage"}/>
                            </div>
                            <div className={`${this.state.browserWidth < 480 && "hidden"} navLocation`}>
                                <input type="text" placeholder={"Location"}/>
                                <img src={location} alt=""/>
                            </div>
                        </form>
                        <ul className={`${this.state.browserWidth < 480 && "hidden"}`}>
                            <li><a href="">How it works</a></li>
                            <li><a href="">Sign up</a></li>
                            <li><a href="">Log in</a></li>
                        </ul>
                        <img src={hamburger} alt=""
                             className={`hamburger ${this.state.browserWidth > 480 ? "hidden" : "block"}`}/>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;