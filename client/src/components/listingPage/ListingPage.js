import React from 'react';
import ListAnItem from "../mainPage/ListAnItem";
import ItemListing from "../mainPage/ItemListing";

import image from '../../assets/images/listing-pic.jpg'
import cloud from '../../assets/images/cloudStrife.png'
import g7 from '../../assets/images/g7.jpg'
import map from '../../assets/images/storelocator_clothing.png'

class ListingPage extends React.Component {
    state = {
        sliderImages: [image, cloud, g7],
        sliderImageIndex: 0,
        listingsFromUser: [1, 1, 1, 1, 1, 1, 1, 1, 1]
    }

    handleSlider(index, images) {
        if (index < images.length - 1) {
            this.setState({
                sliderImageIndex: this.state.sliderImageIndex + 1
            })
        } else {
            this.setState({
                sliderImageIndex: 0
            })
        }
    }

    render() {
        let style = {
            backgroundImage: `url(${this.state.sliderImages[this.state.sliderImageIndex]})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }
        const browserWidth = window.innerWidth
        console.log(this.state)
        // const sliderImages = [...this.state.sliderImages]

        return (

            <div className="listingPage">

                <div className="container flex">

                    <div className="listingMain flex">

                        <section className="listingImage"
                                 onClick={() => this.handleSlider(this.state.sliderImageIndex, this.state.sliderImages)}>
                            <img src={this.state.sliderImages[this.state.sliderImageIndex]} alt=""/>
                            <p>Trade + $250</p>
                            <p>View photos (5)</p>

                        </section>
                        <section className="listingInfo">


                            <div className="listingUser flex">
                                <sub>Posted 3 days ago by: </sub>
                                <p>Cloud Strife</p>
                                <div className="listingAvatar">
                                    <img src={cloud} alt=""/>
                                </div>
                            </div>
                            <h4>Final Fantasy Remake</h4>
                            {/*<p>Trade + $250</p>*/}
                            <p>Belleville, IL</p>
                            <h4>Description</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur expedita nisi
                                ullam. Alias commodi debitis illum nemo provident quas reiciendis.
                            </p>
                            <h4>Will trade for:</h4>
                            <p>Macbook Pro, PS4 Pro, Motorcycle</p>
                        </section>
                    </div>
                    <div className="listingFeedback">


                        <img src={map} alt=""/>

                        <form action="" className="offerForm">
                            <textarea name="makeAnOffer" id="makeAnOffer" cols="30" rows="10"
                                      placeholder={'Send message or make an offer!'}></textarea>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
                <div className="otherListings">
                    <h4 className={'container'}>More listings from Cloud Strife: </h4>

                    <div className="moreListingsUser container grid">
                        {this.state.listingsFromUser.map(item => <ItemListing/>)}
                    </div>
                    <h4 className={'container'}>Similar listings near you:</h4>
                    <div className="moreListingsUser container grid">
                        {this.state.listingsFromUser.map(item => <ItemListing/>)}
                    </div>
                </div>


            </div>
        )
    }
}

export default ListingPage;