import React, {useEffect} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {useState, useContext} from 'react'
import ListAnItem from "../mainPage/ListAnItem";
import ItemListing from "../mainPage/ItemListing";
import {DataContext, withData} from "../../context/dataProvider";
import image from '../../assets/images/listing-pic.jpg'
import cloud from '../../assets/images/cloudStrife.png'
import g7 from '../../assets/images/g7.jpg'
import map from '../../assets/images/storelocator_clothing.png'

class ListingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    style = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    browserWidth = window.innerWidth

    handleSlider = (index, images) => {
        if (index < images.length - 1) {
            this.setState({
                sliderImageIndex: this.state.sliderImageIndex + 1,
            })
        } else {
            this.setState({
                sliderImageIndex: 0
            })
        }
    }
    // getUserById = () => {
    //     console.log(this.props)
    //     axios.get(`http://localhost:8080/api/user/${this.state.listingPageData.user}`)
    //         .then(response => {
    //             this.setState({
    //                 user: response.data
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    id = this.props.listingPageData.user

    // static getDerivedStateFromProps(props,state){
    //     if(props !== state){
    //         return {
    //             ...props
    //         }
    //     }
    // }
    deletePost = (id) => {
        id = this.props.listingPageData.id
        if (this.props.authenticatedUser && this.props.authenticatedUser.id === this.props.listingPageData.user) {
            axios.delete(`http://localhost:8080/api/listing/${id}`)
                .then(response => {
                    console.log(response)
                    this.props.history.push("/")
                }).catch(err => {
                console.log(err)
            })
        }
    }

    componentDidMount() {
        // console.log(this.props.user)
    }

    componentDidUpdate() {
        // console.log(this.props.user)
    }

    render() {

        const {category, data_created, description, itemsWanted, location, price, title, tradeOnly} = this.props.listingPageData
        console.log(this.props)
        const {user} = this.props.user
        return (
            <div className="listing-page">

                <div className="listing-page__inner-container container">

                    <div className="listing-page__listing-main">

                        <section className="listing-page__listing-image-section">
                            <img className={'listing-page__listing-image'}
                                 src={`${this.props.listingPageData.imageUrl && this.props.listingPageData.imageUrl}`}
                                 alt=""/>
                            <p className={'listing-page__price-btn'}>{this.props.listingPageData.price < 1 ? "Trade Only": `Trade + $${this.props.listingPageData.price}`}</p>
                            <p className={'listing-page__photo-btn'}>View photos</p>

                        </section>
                        <section className="listing-page__info-section">


                            <div className="listing-page__user-wrapper">
                                <sub className={'listing-page__age'}>Posted 3 days ago by: </sub>
                                <p className={'listing-page__name'}>{this.props.user && this.props.user.firstName} {this.props.user && this.props.user.lastName}</p>
                                <div className="listing-page__avatar-wrapper">
                                    <img className={'listing-page__avatar-image'}
                                         src={this.props.user && this.props.user.imageUrl} alt=""/>
                                </div>
                            </div>
                            <h4 className={'listing-page__title'}></h4>
                            {/*<p>Trade + $250</p>*/}
                            <p className={'listing-page__location'}>{location}</p>
                            <h4 className={'listing-page__description-header'}>Description:</h4>
                            <p className={'listing-page__description-text'}>
                                {description}
                            </p>
                            <h4 className={'listing-page__wanted-header'}>Will trade for:</h4>
                            <p className={'listing-page__wanted'}>{itemsWanted}</p>

                            { this.props.authenticatedUser && this.props.authenticatedUser.id === this.props.listingPageData.user ? (
                                <p className="listing-page__delete" onClick={this.deletePost}>Delete This Post</p>

                            ):null}
                        </section>
                    </div>
                    <div className="listing-page__contact-section">


                        <img className={'listing-page__map'} src={map} alt=""/>

                        <form action="" className="listing-page__offer-form">
                            <textarea className={'listing-page__offer-form-input'} name="makeAnOffer" id="makeAnOffer"
                                      cols="30" rows="10"
                                      placeholder={'Send message or make an offer!'}></textarea>
                            <button className={'listing-page__offer-form-submit'}>Send</button>
                        </form>
                    </div>
                </div>
                <div className="listing-page__other-listings-section">
                    <h4 className={'listing-page__listings-by-user-header container'}>More listings from Cloud
                        Strife: </h4>

                    <div className="listing-page__listings-by-user-wrapper container">
                        {this.props.user.listing ? this.props.user.listing.map(listing => <ItemListing
                            key={listing.id}{...listing}/>) : undefined}
                    </div>
                    <h4 className={'listing-page__listings-near-you-header container'}>Similar listings near you:</h4>
                    <div className="listing-page__listings-near-you-wrapper container grid">
                        {this.props.user.listing ? this.props.user.listing.map(listing => <ItemListing
                            key={listing.id} {...listing}/>) : undefined}
                    </div>
                </div>


            </div>
        )
    }
}


export default withData(withRouter(ListingPage));
// export default ListingPage;