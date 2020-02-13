import React, {Component, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';

export const DataContext = React.createContext();

class DataProvider extends  React.Component{
    state={
        user: {},
        authenticated: false,
        authenticatedUser: undefined,
        messages: [],
        notifications: [],
        listings: [],
        listingPageData: [],
        error: []
    }

    // updateItem=(item)=>{
    //
    // }
     getAllListings =()=> {
        console.log("get all listings")
        axios.get("api/listing/all").then(response=>{
            this.setState(
                { listings: response.data },
                () => console.log(this.state.listings)
            );
        }).catch(err=>{
            console.log(err)
        })
    }

     getListingById =(id)=>{
        console.log('get listing by id')
        axios.get(`http://localhost:8080/api/listing/${id}`)
            .then(response =>{
                console.log(response.data)

                this.setState(
                    { listingPageData: response.data },
                    () => console.log(this.state.listingPageData)
                )
                console.log("Loading user from ::> ", response.data)
                this.getUserById(response.data.user)
            })
            .catch(err=>{
                console.log(err)
            })
    }
     getUserById = (id)=>{
        console.log("getuserbyid has been called")
         console.log(id)
        axios.get(`http://localhost:8080/api/user/${id} `)
            .then(response=>{
                this.setState(
                    { user:response.data },
                    () => console.log(this.state.user)
                );
            }).catch(err=>{
                console.log(err)
        })
    }

    onLogoutUser = () => {
        this.setState({authenticatedUser: undefined, authenticated: false });
    }
    onSubmitLogin = (loginData) => {
        console.log("Login user")
        axios.post("http://localhost:8080/api/user/login", loginData)
            .then(response => {
                console.log(response)
                this.setState({authenticatedUser: response.data, authenticated: true});
            })

            .catch(error => {
                console.log(error);
                this.setState({authenticatedUser: undefined, authenticated: false });
            })
    };
    onSubmitSignup = (signupData) => {
        console.log("Sign up user")
        axios.post("http://localhost:8080/api/user", signupData)
            .then(response => {
                console.log(response)
                this.setState({authenticatedUser: response.data, authenticated: true});
            })

            .catch(error => {
                console.log(error);
                this.setState({authenticatedUser: undefined, authenticated: false });
            })

    };

    render(){
        return (
            <DataContext.Provider
                value={
                    {
                        ...this.state,
                        getAllListings: this.getAllListings,
                        getListingById: this.getListingById,
                        getUserById: this.getUserById,
                        onSubmitLogin: this.onSubmitLogin,
                        onSubmitSignup: this.onSubmitSignup,
                        onLogoutUser: this.onLogoutUser
                    }
                }
            >

                {this.props.children}
            </DataContext.Provider>
        )
    }

}



export const withData = C => props => (
    <DataContext.Consumer>
        {value => <C {...props}{...value}/>}
    </DataContext.Consumer>
)
export default withRouter(DataProvider);
// export default DataProvider