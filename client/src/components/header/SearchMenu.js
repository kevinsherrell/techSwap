import React from 'react';
import search from "../../assets/images/search.png";
import location from "../../assets/images/location.png";

function SearchMenu(props) {
    console.log(props)
    return (
        <div className={`searchMenu ${props.searchToggle === false && "hidden"}`}>
            <div className="container grid">
                <div className="searchMenuTop">
                    <h3>trad'r</h3>
                    <i className="material-icons" onClick={props.toggleSearchMenu}>close</i>
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
                        <button type={"button"} onClick={props.toggleSearchMenuFilter}>Filter <i
                            className="material-icons">{props.searchMenuFilter  ? "keyboard_arrow_up" : "keyboard_arrow_down"}</i>
                        </button>
                        <button className={props.searchMenuFilter ? "hidden" : undefined}>Search</button>
                    </div>
                    <div className={`filterOptions ${!props.searchMenuFilter && "hidden"}`}>
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
    )
}
export default SearchMenu;