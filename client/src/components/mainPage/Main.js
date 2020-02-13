import React, {useContext, useEffect} from 'react';
import {useState} from 'react'
import uuid from 'uuid'
import ListAnItem from "./ListAnItem";
import ItemListing from "./ItemListing";
import {DataContext, withData} from "../../context/dataProvider";
import Axios from 'axios';
import PropTypes from 'prop-types'
import {Route} from "react-router-dom";
import ListingPage from "../listingPage/ListingPage";
import PostItem from "./PostItem";


class Main extends React.Component {
    state = {
        catMenuOpened: false,
        postItemForm: false,
        browserWidth: window.innerWidth,
        // ...this.props
        listings: this.props.listings
    }
    handleCatMenu = () => {
        this.setState({
            catMenuOpened: !this.state.catMenuOpened
        }, () => console.log("cat menu has been opened"))
    }
    togglePostItem=(e)=>{
        e.preventDefault();
        this.setState({
            postItemForm: !this.state.postItemForm
        })
    }
    componentDidMount() {
        this.props.getAllListings()
        window.addEventListener('resize', () => {
            this.setState({
                browserWidth: window.innerWidth
            }, () => console.log(this.state))
        })
        // if (this.props.getAllListings() !== this.props.listings) {
        //     console.log("the listing data has changed")
        // }
    }
    componentDidUpdate(prevProps, prevState){
        console.log(this.props.listings)
        if(prevState.listings !== this.props.listings){
            this.setState({
                listings: this.props.listings
            })
        }

    }
    static getDerivedStateFromProps=(props, state)=>{
                if(props.listings !== state.listings){
                    return {
                        listings: props.listings
                    }
                }
                return null;
    }
    render() {
        console.log("rendered")
        const listings = this.props.listings
        console.log(listings);
        const {browserWidth} = this.state.browserWidth
        return (
            <div className="home">
                <div className="home__inner-container container">
                    <div className={`sidebar ${browserWidth < 1023 && 'hidden'}`}>
                        <p className={'sidebar__listAnItem'} onClick={this.togglePostItem}>List an Item</p>
                        <h4 className={'sidebar__category-header'}>Categories: </h4>
                        <ul className={'sidebar__category-list'}>
                            <li className={'sidebar__category-list-item'}><a href=""
                                                                             className={'sidebar__category-list-link'}>Computers</a>
                            </li>
                            <li className={'sidebar__category-list-item'}><a href=""
                                                                             className={'sidebar__category-list-link'}>Tablets</a>
                            </li>
                            <li className={'sidebar__category-list-item'}><a href=""
                                                                             className={'sidebar__category-list-link'}>Phones</a>
                            </li>
                            <li className={'sidebar__category-list-item'}><a href=""
                                                                             className={'sidebar__category-list-link'}>TVs</a>
                            </li>
                            <li className={'sidebar__category-list-item'}><a href=""
                                                                             className={'sidebar__category-list-link'}>Video
                                Games/Consoles</a></li>
                            <li className={'sidebar__category-list-item'}><a href=""
                                                                             className={'sidebar__category-list-link'}>Appliances</a>
                            </li>
                            <li className={'sidebar__category-list-item'}><a href=""
                                                                             className={'sidebar__category-list-link'}>Vehicle</a>
                            </li>
                        </ul>
                        <form className="sidebar__update-form">
                            <h4 className={'sidebar__update-form-condition-header'}>Condition: </h4>
                            <ul className={'sidebar__update-form-condition-list'}>
                                <li className={'sidebar__update-form-condition-list-item'}><input type="radio"
                                                                                                  name={'condition'}
                                                                                                  value={'new'}
                                                                                                  className={'sidebar__update-form-condition-list-input'}/> New
                                </li>
                                <li className={'sidebar__update-form-condition-list-item'}><input type="radio"
                                                                                                  name={'condition'}
                                                                                                  value={'used'}
                                                                                                  className={'sidebar__update-form-condition-list-input'}/> Used
                                </li>
                                <li className={'sidebar__update-form-condition-list-item'}><input type="radio"
                                                                                                  name={'condition'}
                                                                                                  value={'damaged'}
                                                                                                  className={'sidebar__update-form-condition-list-input'}/> Damaged
                                </li>
                                <li className={'sidebar__update-form-condition-list-item'}><input type="radio"
                                                                                                  name={'condition'}
                                                                                                  value={'broken'}
                                                                                                  className={'sidebar__update-form-condition-list-input'}/> Broken
                                </li>
                            </ul>

                            <h4 className={'sidebar__update-form-price-header'}>Price: </h4>
                            <div className="sidebar__update-form-price-wrapper">
                                <input type="text" placeholder={'min'}
                                       className={'sidebar__update-form-price-input'}/> To <input type="text"
                                                                                                  placeholder={'max'}
                                                                                                  className={'sidebar__update-form-price-input'}/>
                            </div>

                            <h4 className={'sidebar__update-form-distance-header'}>Miles (from your location): </h4>
                            <div className="sidebar__update-form-distance-wrapper">
                                <input type="text" placeholder={'miles'}
                                       className={'sidebar__update-form-distance-input'}/> from <input type="text"
                                                                                                       placeholder={'zip'}
                                                                                                       className={'sidebar__update-form-distance-input'}/>
                            </div>
                            <button className={'sidebar__update-form-submit'}>Update Search</button>
                        </form>
                    </div>
                    <div className={"content"}>
                        <section className="content__sort-header ">
                            <div className={'content__sort-menu-wrapper'} onClick={this.state.handleCatMenu}>
                                <p className={'content__sort-menu-btn'}>Sort/Filter: All <i
                                    className="content__sort-menu-icon material-icons">keyboard_arrow_down</i></p>


                                <div
                                    className={`${this.state.catMenuOpened ? "content__sort-menu-drop-down--open" : "content__sort-menu-drop-down--closed"}`}>
                                    <ul className={'content__sort-menu-drop-down-list'}>
                                        <li className={'content__sort-menu-drop-down-item'}>Oldest</li>
                                        <li className={'content__sort-menu-drop-down-item'}>Newest</li>
                                        <li className={'content__sort-menu-drop-down-item'}>Price: low to high</li>
                                        <li className={'content__sort-menu-drop-down-item'}>Price: high to low</li>
                                        <li className={'content__sort-menu-drop-down-item'}>Distance: closest</li>
                                    </ul>
                                </div>
                            </div>


                            <p className={"content__sort-description"} onClick={this.getAllListings}>Listings near
                                you</p>
                        </section>
                        <section className="content__listings">
                            {this.state.listings.map(listing => {
                                return (
                                    <ItemListing key={uuid()} {...listing}/>
                                )
                            })}
                        </section>
                    </div>

                </div>
                {browserWidth < 650 && (
                    <ListAnItem/>

                )}

                <ListAnItem togglePostItem={this.togglePostItem}/>
                {this.state.postItemForm && (<PostItem {...this.state} togglePostItem={this.togglePostItem}/>
                )}
            </div>
        )
    }


}

export default withData(Main);
// export default (Main);


