import React from 'react'

import HeaderNav from "./HeaderNav";
import SearchMenu from '../header/SearchMenu'
import NavMenu from '../header/NavMenu';

import hamburger from "../../assets/images/hamburger.png"
import search from "../../assets/images/search.png"
import location from "../../assets/images/location.png"
import close from "../../assets/images/close.png"
import avatar from '../../assets/images/cloudStrife.png'

class Header extends React.Component {
    state = {
        browserWidth: window.innerWidth,
        searchToggle: false,
        searchMenuFilter: false,
        navMenuToggle: false,
        authenticated: true
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
            <header className={"header"}>
                <HeaderNav toggleSearchMenu={this.toggleSearchMenu} toggleSearchMenuFilter={this.toggleSearchMenuFilter} toggleNavMenu={this.toggleNavMenu}{...this.state}/>
                <SearchMenu toggleSearchMenu={this.toggleSearchMenu} toggleSearchMenuFilter={this.toggleSearchMenuFilter} toggleNavMenu={this.toggleNavMenu}{...this.state}/>
                <NavMenu toggleSearchMenu={this.toggleSearchMenu} toggleSearchMenuFilter={this.toggleSearchMenuFilter} toggleNavMenu={this.toggleNavMenu}{...this.state}/>
            </header>
        )
    }
}

export default Header;

//todo - Create an advanced search for desktops. When search is clicked menu appears under the search bar automatically