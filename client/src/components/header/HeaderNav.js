import React from 'react';
import search from "../../assets/images/search.png";
import location from "../../assets/images/location.png";
import avatar from "../../assets/images/cloudStrife.png";
import {Link} from 'react-router-dom'
class HeaderNav extends React.Component {
    state = {}

    render() {
        return (
            <nav className={'header__nav'}>
                <div
                    className={`header__nav-inner-container ${this.props.authenticated && 'header__nav-inner-container--authenticated'} container`}>
                    <Link to={'/'}><h3 className={'header__logo'}>trad'r</h3></Link>

                    <form action="" className={`header__nav-search-form flex`}>
                        <div
                            className={`header__search-input-wrapper ${this.props.searchToggle ? "hidden" : undefined}`}>
                            <input className={'header__search-input'} type="text" placeholder={"Search"}
                                   onClick={this.props.browserWidth < 767 && !this.props.searchToggle ? this.props.toggleSearchMenu : undefined}/>
                            <img src={search} alt="" className={"header__search-image"}/>
                        </div>
                        <div className={`header__location-input-wrapper`}>
                            <input className={'header__location-input'} type="text" placeholder={"Location"}/>
                            <img className={'header__location-image'} src={location} alt=""/>
                            <button
                                className={`header__search-submit`}>Search
                            </button>
                        </div>

                    </form>

                    <div className={`header__auth-navigation`}>
                        {!this.props.authenticated && (
                            <ul className={'header__logged-out'}>
                                <>
                                    <li className={`header__logged-out-signup`} onClick={this.props.toggleSignup}>
                                        {/*    /!*    /!*todo -- if authenticated is true Sign up is hidden and log in becomes log out; An avatar  is then placed to the right of the page which will be a link to the dashboard*!/*!/*/}
                                        <i className="header__logged-out-icon material-icons">person_add</i>
                                        <p className={'header__logged-out-link'} >Sign up</p>
                                    </li>
                                    <li className={`header__logged-out-login`} onClick={this.props.toggleLogin}>
                                        <i className="header__logged-out-icon material-icons">person</i>
                                        <p className={'header__logged-out-link'} >Log in</p>
                                    </li>
                                </>
                            </ul>
                        )}


                        {/*  todo - display only if the user is logged in*/}
                        {
                            this.props.authenticated && (
                                <ul className="header__logged-in">
                                    <li className={'header__logged-in-item'}>
                                        <i className="header__logged-in-icon material-icons">home</i>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className={'header__logged-in-item'}>
                                        <i className="header__logged-in-icon material-icons">notifications</i>
                                        Notifications
                                    </li>
                                    <li className={'header__logged-in-item'}>
                                        <i className="header__logged-in-icon material-icons">chat</i>
                                        Messages
                                    </li>
                                    <li className={'header__logged-in-item'}>
                                        <i className="header__logged-in-icon material-icons">add_box</i>
                                        List An Item
                                    </li>
                                    <li className={'header__logged-in-item'}>
                                        <i className="header__logged-in-icon material-icons">apps</i>
                                        My Listings
                                    </li>
                                    <li className={'header__logged-in-item'}>{this.props.authenticated && (
                                        <div className={"header__logged-in-avatar-wrapper"}>
                                            <img src={avatar} alt="" className={'header__logged-in-avatar-image'}/>
                                        </div>)}
                                    </li>
                                </ul>
                            )
                        }
                    </div>

                    <i className={`material-icons ${this.props.browserWidth > 1023 && "hidden"} header__hamburger`}
                       onClick={this.props.toggleNavMenu}>menu</i>
                </div>


            </nav>

        )
    }
}


export default HeaderNav;