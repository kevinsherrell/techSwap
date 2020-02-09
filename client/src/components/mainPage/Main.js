import React from 'react';
import ListAnItem from "./ListAnItem";
import ItemListing from "./ItemListing";
import Axios from 'axios';

class Main extends React.Component {
    state = {
        catMenuOpened: false,
        browserWidth: window.innerWidth,
        listings: [],
        listingImage: `url("https://source.unsplash.com/random/300×300")`
    }
    handleCatMenu = () => {
        this.setState({
            catMenuOpened: !this.state.catMenuOpened
        })
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                browserWidth: window.innerWidth
            })
            console.log(this.state.browserWidth)
        })

       this.getListings();
    }
    getListings(){
        Axios.get("http://localhost:8080/api/listing/all")
            .then((response)=>{
                console.log('working')
                console.log(response);
                this.setState({
                    listings: response.data
                })
                console.log(this.state.listings)

            })
            .catch((error)=>{
                console.log(error)
            })


    }

    render() {
        return (
            <div className="home">
                <div className="home__inner-container container">
                    <div className={`sidebar ${this.state.browserWidth < 1023 && 'hidden'}`}>
                        <h4 className={'sidebar__category-header'}>Categories: </h4>
                        <ul className={'sidebar__category-list'}>
                            <li className={'sidebar__category-list-item'}><a href="" className={'sidebar__category-list-link'}>Computers</a></li>
                            <li className={'sidebar__category-list-item'}><a href="" className={'sidebar__category-list-link'}>Tablets</a></li>
                            <li className={'sidebar__category-list-item'}><a href="" className={'sidebar__category-list-link'}>Phones</a></li>
                            <li className={'sidebar__category-list-item'}><a href="" className={'sidebar__category-list-link'}>TVs</a></li>
                            <li className={'sidebar__category-list-item'}><a href="" className={'sidebar__category-list-link'}>Video Games/Consoles</a></li>
                            <li className={'sidebar__category-list-item'}><a href="" className={'sidebar__category-list-link'}>Appliances</a></li>
                            <li className={'sidebar__category-list-item'}><a href="" className={'sidebar__category-list-link'}>Vehicle</a></li>
                        </ul>
                        <form className="sidebar__update-form">
                            <h4 className={'sidebar__update-form-condition-header'}>Condition: </h4>
                            <ul className={'sidebar__update-form-condition-list'}>
                                <li className={'sidebar__update-form-condition-list-item'}><input type="radio" name={'condition'} value={'new'} className={'sidebar__update-form-condition-list-input'}/> New</li>
                                <li className={'sidebar__update-form-condition-list-item'}><input type="radio" name={'condition'} value={'used'} className={'sidebar__update-form-condition-list-input'}/> Used</li>
                                <li className={'sidebar__update-form-condition-list-item'}><input type="radio" name={'condition'} value={'damaged'} className={'sidebar__update-form-condition-list-input'}/> Damaged</li>
                                <li className={'sidebar__update-form-condition-list-item'}><input type="radio" name={'condition'} value={'broken'} className={'sidebar__update-form-condition-list-input'}/> Broken</li>
                            </ul>

                            <h4 className={'sidebar__update-form-price-header'}>Price: </h4>
                            <div className="sidebar__update-form-price-wrapper">
                                <input type="text" placeholder={'min'} className={'sidebar__update-form-price-input'}/> To <input type="text" placeholder={'max'} className={'sidebar__update-form-price-input'}/>
                            </div>

                            <h4 className={'sidebar__update-form-distance-header'}>Miles (from your location): </h4>
                            <div className="sidebar__update-form-distance-wrapper">
                                <input type="text" placeholder={'miles'} className={'sidebar__update-form-distance-input'}/> from <input type="text" placeholder={'zip'} className={'sidebar__update-form-distance-input'}/>
                            </div>
                            <button className={'sidebar__update-form-submit'}>Update Search</button>
                        </form>
                    </div>
                    <div className={"content"}>
                        <section className="content__sort-header ">
                                <div className={'content__sort-menu-wrapper'} onClick={this.handleCatMenu}>
                                    <p className={'content__sort-menu-btn'}>Sort/Filter: All <i
                                        className="content__sort-menu-icon material-icons">keyboard_arrow_down</i></p>


                                    <div className={`${this.state.catMenuOpened ? "content__sort-menu-drop-down--open" : "content__sort-menu-drop-down--closed"}`}>
                                        <ul className={'content__sort-menu-drop-down-list'}>
                                            <li className={'content__sort-menu-drop-down-item'}>Oldest</li>
                                            <li className={'content__sort-menu-drop-down-item'}>Newest</li>
                                            <li className={'content__sort-menu-drop-down-item'}>Price: low to high</li>
                                            <li className={'content__sort-menu-drop-down-item'}>Price: high to low</li>
                                            <li className={'content__sort-menu-drop-down-item'}>Distance: closest</li>
                                        </ul>
                                    </div>
                                </div>


                                <p className={"content__sort-description"}>Listings near you</p>
                        </section>
                        <section className="content__listings">
                                {this.state.listings.map(listing => <ItemListing key={listing.id} {...listing} listingImage={this.state.listingImage}/>)}
                        </section>
                    </div>

                </div>
                {this.state.browserWidth < 650 && (
                    <ListAnItem/>

                )}


            </div>
        )
    }
}

export default Main;

