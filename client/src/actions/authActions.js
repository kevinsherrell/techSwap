import {LOGIN_USER, SIGNUP_USER} from "./types";
import axios from "axios";

export const userSignup =(signupData)=>dispatch=>{
    axios.post("http://localhost:8080/api/user", signupData)
        .then(response => dispatch({
            type: SIGNUP_USER,
            payload: response.data
        }))
        // .catch(error => {
        //     console.log(error);
        //     this.setState({authenticatedUser: undefined, authenticated: false });
        // })
}
export const userLogin =(loginData)=>dispatch=> {
    axios.post("http://localhost:8080/api/user/login", loginData)
        .then(response => dispatch({
            type: LOGIN_USER,
            payload: response.data
        }))

        .catch(error => {
            console.log("loginData =>", loginData);
        })
}