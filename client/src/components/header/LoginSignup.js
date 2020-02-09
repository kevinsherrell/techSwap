import React from 'react'

class LoginSignup extends React.Component{
    state ={
        signup: false,
        login: true,
        firstName: "",
        lastName: "",
        email: "",
        location: "",
        password: "",
        passwordConfirmation: ""
    };
    onChange=(e)=>{
      this.setState({[e.target.name]: e.target.value})
    };
    onSubmitLogin = (e)=>{

    };
    onSubmitSignup = (e)=>{

    };
    render() {
        console.log(this.state);
        return (
            <div className="login-signup">
                <div className="container">
                    <i className="material-icons login-signup__close-icon" >close</i>
                    <h3 className="login-signup__logo">trad'r</h3>
                    <h4 className="login-signup__sub-header">Trade #1 online bartering platform</h4>

                    {this.state.signup && (
                        <form action="" className="login-signup__signup-form">
                            <div className="signup-form__row-1">
                                <div className="signup-form__first-name">
                                    <input type="text" name={'firstName'} className="signup-form__first-name-input" value={this.state.firstName} onChange={this.onChange} placeholder={"First Name"}/>
                                </div>
                                <div className="signup-form__last-name">
                                    <input type="text" name={'lastName'} className="signup-form__last-name-input" value={this.state.lastName} onChange={this.onChange} placeholder={"Last Name"}/>
                                </div>
                            </div>
                            <div className="signup-form__row-2">
                                <div className="signup-form__email">
                                    <input type="text" name={'email'} className="signup-form__email-input" value={this.state.email} onChange={this.onChange} placeholder={"Email"}/>
                                </div>
                                <div className="signup-form__password">
                                    <input type="text" name={'password'} className="signup-form__password-input" value={this.state.password} onChange={this.onChange} placeholder={"Password"}/>

                                </div>
                                <div className="signup-form__password-confirmation">
                                    <input type="text" name={'passwordConfirmation'} className="signup-form__password-confirmation-input" value={this.state.passwordConfirmation} onChange={this.onChange} placeholder={"Confirm Password"}/>
                                </div>
                            </div>
                            <div className="signup-form__row-3">
                                <div className="signup-form__location">
                                    <input type="text" name={'location'} maxLength={"5"} className="signup-form__location-input" value={this.state.location} onChange={this.onChange} placeholder={"Location (Zip Code)"}/>
                                </div>
                            </div>
                            <p className={"signup-form__submit"}>Sign up</p>
                        </form>
                    )}


                    {/*LOGIN FORM*/}
                    {this.state.login && (
                        <form action="" className="login-signup__login-form">
                            <div className="login-form">
                                <div className="login-form__email">
                                    <input type="text" name={'email'} className="signup-form__email-input" value={this.state.email} disabled={this.state.signup && "disabled"} onChange={this.onChange} placeholder={"Email"}/>
                                </div>
                                <div className="login-form__password">
                                    <input type="text" name={'password'} className="login-form__password-input" value={this.state.password} disabled={this.state.signup && "disabled"} onChange={this.onChange} placeholder={"Password"}/>
                                </div>
                            </div>
                            <p className={"login-form__submit"}> Log In</p>
                        </form>
                    )}

                </div>
            </div>
        )
    }
}
export default LoginSignup;