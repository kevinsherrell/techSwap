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

            <div className="listing-page">

                <div className="listing-page__inner-container container">

                    <div className="listing-page__listing-main">

                        <section className="listing-page__listing-image-section"
                                 onClick={() => this.handleSlider(this.state.sliderImageIndex, this.state.sliderImages)}>
                            <img className={'listing-page__listing-image'} src={this.state.sliderImages[this.state.sliderImageIndex]} alt=""/>
                            <p className={'listing-page__price-btn'}>Trade + $250</p>
                            <p className={'listing-page__photo-btn'}>View photos (5)</p>

                        </section>
                        <section className="listing-page__info-section">


                            <div className="listing-page__user-wrapper">
                                <sub className={'listing-page__age'}>Posted 3 days ago by: </sub>
                                <p className={'listing-page__name'}>Cloud Strife</p>
                                <div className="listing-page__avatar-wrapper">
                                    <img className={'listing-page__avatar-image'} src={cloud} alt=""/>
                                </div>
                            </div>
                            <h4 className={'listing-page__title'}>Final Fantasy Remake</h4>
                            {/*<p>Trade + $250</p>*/}
                            <p className={'listing-page__location'}>Belleville, IL</p>
                            <h4 className={'listing-page__description-header'}>Description</h4>
                            <p className={'listing-page__description-text'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur expedita nisi
                                ullam. Alias commodi debitis illum nemo provident quas reiciendis.
                            </p>
                            <h4 className={'listing-page__wanted-header'}>Will trade for:</h4>
                            <p className={'listing-page__wanted'}>Macbook Pro, PS4 Pro, Motorcycle</p>
                        </section>
                    </div>
                    <div className="listing-page__contact-section">


                        <img className={'listing-page__map'} src={map} alt=""/>

                        <form action="" className="listing-page__offer-form">
                            <textarea className={'listing-page__offer-form-input'} name="makeAnOffer" id="makeAnOffer" cols="30" rows="10"
                                      placeholder={'Send message or make an offer!'}></textarea>
                            <button className={'listing-page__offer-form-submit'}>Send</button>
                        </form>
                    </div>
                </div>
                <div className="listing-page__other-listings-section">
                    <h4 className={'listing-page__listings-by-user-header container'}>More listings from Cloud Strife: </h4>

                    <div className="listing-page__listings-by-user-wrapper container">
                        {this.state.listingsFromUser.map(item => <ItemListing/>)}
                    </div>
                    <h4 className={'listing-page__listings-near-you-header container'}>Similar listings near you:</h4>
                    <div className="listing-page__listings-near-you-wrapper container grid">
                        {this.state.listingsFromUser.map(item => <ItemListing/>)}
                    </div>
                </div>


            </div>
        )
    }
}

export default ListingPage;