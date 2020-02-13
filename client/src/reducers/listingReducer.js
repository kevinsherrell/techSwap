import {FETCH_ALL_LISTINGS, FETCH_LISTING_BY_ID, CREATE_LISTING, FETCH_USER_BY_ID} from "../actions/types";

const initialState={
    listings: [],
    listingPage: {},
    listingPageUser: {},
    successMessage: ""
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_ALL_LISTINGS:
            console.log("FETCH_ALL_LISTINGS")
            console.log(action)
            return {
                ...state,
                listings: action.payload
            }
        case FETCH_LISTING_BY_ID:
            console.log('FETCH_LISTING_BY_ID')
            console.log(action)
            return {
                ...state,
                listingPage: action.payload
            }
        case FETCH_USER_BY_ID:
            console.log("FETCH_USER_BY_ID")
            console.log(action)
            return{
                ...state,
                listingPageUser: action.payload
            }
        case CREATE_LISTING:
            console.log("CREATE LISTING")
            return{
                ...state,
                successMessage: "successful"
            }
        default:
            return state;
    }
}