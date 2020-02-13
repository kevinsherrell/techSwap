import React from 'react';
import avatar from "../../assets/images/cloudStrife.png";

function NavMenu(props) {
    // console.log("Menu props ::> ", props)
    return (
            <>

            <div
                className={`${props.navMenuToggle ? "header__nav-menu--open" : "header__nav-menu--closed"}`}>
                {/*todo - only display if the user is logged in*/}
                <div className="header__nav-menu-user">
                    <div className="header__nav-menu-user-avatar-wrapper">
                        <img className={'header__nav-menu-user-avatar-image'} src={avatar} alt=""/>
                    </div>
                    <p className={'header__nav-menu-user-greeting'}>
                        {props.authenticated ? 'Hi Cloud!' : 'Not Logged In'}
                        {props.authenticated && (
                            <span className={'header__nav-menu-user-log-out'}>(Log out)</span>
                        )}
                    </p>
                    {props.authenticated && (
                        <ul className={"header__nav-menu-user-option-list"}>
                            <li className={'header__nav-menu-user-option-item'}><i className="header__nav-menu-user-icon material-icons">notifications</i>Notifications</li>
                            <li className={'header__nav-menu-user-option-item'}><i className="header__nav-menu-user-icon material-icons">chat</i>Messages</li>
                            <li className={'header__nav-menu-user-option-item'}><i className="header__nav-menu-user-icon material-icons">add_box</i>List An Item</li>
                            <li className={'header__nav-menu-user-option-item'}><i className="header__nav-menu-user-icon material-icons">apps</i>My Listings</li>
                        </ul>
                    )}
                </div>
                {/**/}

                <ul className={'header__nav-menu-link-list'}>
                    <li className={`header__nav-menu-link-item ${props.authenticated && 'header__nav-menu-link-item--authenticated'}`}>Sign up</li>
                    {!props.authenticated && (
                        <li className={'header__nav-menu-link-item'}>Log in</li>
                    )}

                    <li className={"header__nav-menu-category-header"}>Categories</li>
                    <li className={'header__nav-menu-link-item'}>Computers</li>
                    <li className={'header__nav-menu-link-item'}>Tablets</li>
                    <li className={'header__nav-menu-link-item'}>Phones</li>
                    <li className={'header__nav-menu-link-item'}>Tvs</li>
                    <li className={'header__nav-menu-link-item'}>Appliances</li>
                    <li className={'header__nav-menu-link-item'}>Vehicles</li>
                    <hr/>
                    <li className={'header__nav-menu-link-item'}>FAQs</li>
                    <li className={'header__nav-menu-link-item'}>Help/Contact</li>

                </ul>
            </div>
                <div className={`header__nav-menu-overlay ${props.navMenuToggle ? 'header__nav-menu-overlay--true' : 'header__nav-menu-overlay--false'}`}
                     onClick={props.toggleNavMenu}></div>
            </>

    )
}
export default NavMenu;