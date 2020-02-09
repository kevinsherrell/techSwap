import React from 'react';
import image from '../../assets/images/listing-pic.jpg'

function ItemListing(props) {
    const styles = {
        backgroundImage: `${props.listingImage}`,
    }
    return (
        <div className="item-listing">
            <div className="item-listing__image" style={styles}>

            </div>
            <div className="item-listing__item-info">
                <p className="item-listing__item-info-title">{props.title} </p>
                <p className={'item-listing__item-info-price'}>{
                    props.price < 1 ?
                        "Trade" : props.price > 1 ? `Trade + $${props.price}`: undefined}</p>
                <p className={'item-listing__item-info-location'}>Belleville, IL</p>
            </div>

        </div>
    )
}

export default ItemListing;