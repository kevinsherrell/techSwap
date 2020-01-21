import React from 'react';
import search from "../../assets/images/search.png";
import location from "../../assets/images/location.png";
import avatar from "../../assets/images/cloudStrife.png";

function HeaderNav (props) {
    console.log(!props.searchToggle)
    return (
        <nav>
            <div className={`container grid ${props.authenticated && 'desktopAuthGrid'}`}>
                <h3>trad'r</h3>

                <form action="" className={`navForm flex`}>
                    <div className={`searchInput ${props.searchToggle  ? "hidden" : undefined}`}>
                        <input type="text" placeholder={"Search"}
                               onClick={props.browserWidth < 767 && !props.searchToggle ? props.toggleSearchMenu : undefined}/>
                        <img src={search} alt="" className={"searchImage"}/>
                    </div>
                    <div className={`locationInput ${props.browserWidth < 767 && "hidden"}`}>
                        <input type="text" placeholder={"Location"}/>
                        <img src={location} alt=""/>
                        <button className={props.browserWidth < 767 ? "hidden" : undefined}>Search</button>

                    </div>

                </form>

                <ul className={`${props.browserWidth < 1024 ? "hidden" : "flex"} loginSignup`}>
                    {!props.authenticated && (
                        <li className={`flex`}>
                            {/*    /!*    /!*todo -- if authenticated is true Sign up is hidden and log in becomes log out; An avatar  is then placed to the right of the page which will be a link to the dashboard*!/*!/*/}
                            <i className="material-icons">person_add</i>
                            <a href="">Sign up</a>
                        </li>
                    )}

                    <li className={`${props.authenticated ? 'hidden' : 'flex'} `}>
                        <i className="material-icons">person</i>
                        <a href="">Log in</a>
                    </li>
                    {/*  todo - display only if the user is logged in*/}
                    {
                        props.authenticated && (
                            <ul className="authNav flex">
                                <li>
                                    <i className="material-icons">home</i>
                                    Home
                                </li>
                                <li>
                                    <i className="material-icons">notifications</i>
                                    Notifications
                                </li>
                                <li>
                                    <i className="material-icons">chat</i>
                                    Messages
                                </li>
                                <li>
                                    <i className="material-icons">add_box</i>
                                    List An Item
                                </li>
                                <li>
                                    <i className="material-icons">apps</i>
                                    My Listings
                                </li>
                            </ul>
                        )
                    }
                    {props.authenticated && (<li className={"navAvatar"}><img src={avatar} alt=""/></li>)}
                </ul>


                <i className={`material-icons ${props.browserWidth > 1023 && "hidden"} hamburger`}
                   onClick={props.toggleNavMenu}>menu</i>
            </div>


        </nav>

    )
}
export default HeaderNav;