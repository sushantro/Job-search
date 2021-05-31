import React from 'react'
import "./Dofa.css"
import{Navlink} from "react-router-dom"

const Login = () => {
    return (

        <>
         <section className="sign-in">
            <div className="container mt-5">
                <div className="signin- component">
                    <div className="sigin-image">
                        <figure>
                            <img src="" alt="pic"/>

                        </figure>
                         {/* <Navlink to="/signup" className="signin-image-link">I am already  register</Navlink>  */}

                     </div>
                    <div className="signin-form">
                        <h2 className="form-title">signup</h2>
                        <form className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i className="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off" placeholder="YOUR NAME"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    <input type="password" name="password" id="password" autoComplete="off" placeholder="enter password"/>
                                </label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="submit" id="submit" className="form-submit" value="Login"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section> 

        </>
    )
}

export default Login

