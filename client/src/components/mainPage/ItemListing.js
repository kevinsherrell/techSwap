import React from 'react';
import image from '../../assets/images/listing-pic.jpg'
function ItemListing(){
    // const styles = {
    //     backgroundImage: `url("https://source.unsplash.com/random/300×300")`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center'
    // }
    return (
        <div className="item-listing" >
            <div className="item-listing__image" >

            </div>
            <div className="item-listing__item-info">
                <p className="item-listing__item-info-title">Final Fantasy 7 Remake </p>
                <p className={'item-listing__item-info-price'}>Trade + $250</p>
                <p className={'item-listing__item-info-location'}>Belleville, IL</p>
            </div>

            {/*Hello World*/}
        </div>
    )
}
export default ItemListing;