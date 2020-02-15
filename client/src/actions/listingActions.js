import {
    FETCH_ALL_LISTINGS,
    FETCH_LISTING_BY_ID,
    CREATE_LISTING,
    FETCH_USER_BY_ID,
    DELETE_LISTING,
    DELETE_LISTING_ERROR
} from "./types";
import axios from "axios";

export const fetchAllListings = () => dispatch => {
    console.log("fetching")
    axios.get("http://localhost:8080/api/listing/all")
        .then(response => dispatch({
            type: FETCH_ALL_LISTINGS,
            payload: response.data
        }))

        .catch(err => {
            console.log(err)
        })
}
export const postListing = (listingData) => dispatch => {
    console.log("create listing")


    axios.post("http://localhost:8080/api/listing", listingData)
        .then(response => dispatch({
            type: CREATE_LISTING,
            payload: response.data
        })).catch(err => {
        console.log(listingData)
        console.log(err)
    })
}
export const fetchListingById = (id) => dispatch => {
    console.log("fetching listing by id")
    console.log(id)
    axios.get(`http://localhost:8080/api/listing/${id}`)
        .then(response => dispatch(
            {
                type: FETCH_LISTING_BY_ID,
                payload: response.data
            })
        )
        .then(response => {
            axios.get(`http://localhost:8080/api/user/${response.payload.user} `)
                .then(user => dispatch({
                    type: FETCH_USER_BY_ID,
                    payload: user.data
                })).then(response => {
                console.log(response)
            })
                .catch(err => {
                    console.log(err)
                })
        })

}
export const deleteListing = (id,history) => dispatch => {
    axios.delete(`http://localhost:8080/api/listing/${id}`)
        .then(response => dispatch({
            type: DELETE_LISTING,
            payload: response.data
        }))
        .then(()=>history.push("/"))

        .catch(err => dispatch({
            type: DELETE_LISTING_ERROR,
            payload: err.response.data
        }))

}