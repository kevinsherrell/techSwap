import {FETCH_ALL_LISTINGS, FETCH_LISTING_BY_ID, CREATE_LISTING, FETCH_USER_BY_ID} from "../actions/types";

const initialState={
    listings: [],
    listingPage: {},
    listingPageUser: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_ALL_LISTINGS:
            console.log("reducer")
            console.log(action)
            return {
                ...state,
                listings: action.payload
            }
        case FETCH_USER_BY_ID:
            console.log(action)
            return{
                ...state,
                listingPageUser: action.payload
            }
        default:
            return state;
    }
}