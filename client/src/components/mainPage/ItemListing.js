import React from 'react';
import image from '../../assets/images/listing-pic.jpg'
function ItemListing(){
    const styles = {
        backgroundImage: `url("https://source.unsplash.com/random/300×300")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return (
        <div className="itemListing flex" >
            <div className="itemImage" style={styles}>

            </div>
            <div className="itemInfo">
                <p className="title">Final Fantasy 7 Remake </p>
                <p>Trade + $250</p>
                <p>Belleville, IL</p>
            </div>

            {/*Hello World*/}
        </div>
    )
}
export default ItemListing;