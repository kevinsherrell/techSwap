import React from 'react';
import avatar from "../../assets/images/cloudStrife.png";

function NavMenu(props) {
    return (
            <>
            <div
                className={`${props.browserWidth < 1024 && props.navMenuToggle ? "navMenuOpen" : "navMenuClosed"}`}>
                {/*todo - only display if the user is logged in*/}
                <div className="loggedIn flex">
                    <div className="avatar">
                        <img src={avatar} alt=""/>
                    </div>
                    <p>
                        {props.authenticated ? 'Hi Cloud!' : 'Not Logged In'}
                        {props.authenticated && (
                            <span>(Log out)</span>
                        )}
                    </p>
                    {props.authenticated && (
                        <ul className={"flex"}>
                            <li><i className="material-icons">notifications</i>Notifications</li>
                            <li><i className="material-icons">chat</i>Messages</li>
                            <li><i className="material-icons">add_box</i>List An Item</li>
                            <li><i className="material-icons">apps</i>My Listings</li>
                        </ul>
                    )}
                </div>
                {/**/}

                <ul>
                    <li className={`${props.authenticated && 'hidden'}`}>Sign up</li>
                    {!props.authenticated && (
                        <li>Log in</li>
                    )}

                    <li className={"categoryHeader"}>Categories</li>
                    <li>Computers</li>
                    <li>Tablets</li>
                    <li>Phones</li>
                    <li>Tvs</li>
                    <li>Appliances</li>
                    <li>Vehicles</li>
                    <hr/>
                    <li>FAQs</li>
                    <li>Help/Contact</li>

                </ul>
            </div>
                <div className={`${props.navMenuToggle ? 'navMenuOverlayTrue' : 'navMenuOverlayFalse'}`}
                     onClick={props.toggleNavMenu}></div>
            </>

    )
}
export default NavMenu;