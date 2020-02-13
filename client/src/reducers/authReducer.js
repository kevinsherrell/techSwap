import {
    FETCH_ALL_LISTINGS,
    FETCH_LISTING_BY_ID,
    CREATE_LISTING,
    FETCH_USER_BY_ID,
    LOGIN_USER,
    SIGNUP_USER
} from "../actions/types";

const initialState={
    authenticated: false,
    authenticatedUser: {}
}

export default function(state = initialState, action){
    console.log(action)

    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                authenticated: true,
                authenticatedUser: action.payload
            }
        case SIGNUP_USER:
            return{
                ...state,
                authenticated: true,
            }
        default:
            return state;
    }
}