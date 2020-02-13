import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import image from '../../assets/images/listing-pic.jpg'
import {DataContext, withData} from "../../context/dataProvider";
import {Link} from 'react-router-dom'
import ListingPage from "../listingPage/ListingPage";
import {connect} from 'react-redux'
import {fetchListingById} from "../../actions/listingActions";

function ItemListing(props) {

console.log(props)
    const getListingData = (id)=>{
        props.fetchListingById(id)
    }
    let id = props.id
    const styles = {
        backgroundImage: `url(${props.imageUrl})`,
    }
    // console.log(props)
    return (
        <React.Fragment>
            <Link to={`/listing/${props.id}`} onClick={()=>getListingData(id)} >
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
            </Link>

        </React.Fragment>
    )
}
const mapStateToProps = state =>({
    listingData: state.listingData
})
// export default withData(ItemListing);
export default connect(mapStateToProps,{fetchListingById})(ItemListing);