import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import homme from '../images/homme.png';
const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "black" };
    }
};

const Menu = ({ history }) => {
    return (
        <div className=" fixed-top navbar navbar-expand-lg navbar-light">
            <div>
           <img style={{height:'50px' }}src={homme} alt="home"/>
           <a className="navbar-brand" href="/"><b>FlawinaBeauty</b></a>
           </div>
            
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                <div className="navbar-nav">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/")}
                        to="/"
                    >
                        Home
                </Link>
                    <Link
                        className=" nav-item nav-link"
                        style={isActive(history, "/shop")}
                        to="/shop"
                    >
                        Shop
                </Link>

                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <Link
                            className="nav-item nav-link"
                            style={isActive(history, "/admin/dashboard")}
                            to="/admin/dashboard"
                        >
                            Dashboard
                        </Link>
                    )}

                    {!isAuthenticated() && (
                        <Fragment>
                            <Link
                                className=" nav-item nav-link"
                                style={isActive(history, "/signin")}
                                to="/signin"
                            >
                                Signin
                        </Link>
                        </Fragment>
                    )}

                    {isAuthenticated() && (
                            <span
                                className="nav-item nav-link"
                                style={{ cursor: "pointer", color: "black" }}
                                onClick={() =>
                                    signout(() => {
                                        history.push("/");
                                    })
                                }
                            >
                                Signout
                    </span>
                    )}

                   
                </div>
                <div className="navbar-nav ml-auto nav-flex-icons">
                    <a href="https://facebook.com/flawinabeauty/" className="nav-item nav-link"><i className="fa fa-facebook"></i></a>
                    <a href="/"  className="nav-item nav-link"><i className="fa fa-twitter"></i></a>
                    <a href="/" className="nav-item nav-link"><i className="fa fa-youtube"></i></a>
                    <a href="https://instagram.com/flawinabeauty?igshid=c4ubv0xllceo" className="nav-item nav-link"><i className="fa fa-instagram"></i></a>
                    <a href="https://wa.me/919899822063?text=I'm%20interested%20in%20buying%20your%20product" className="nav-item nav-link"><i className="fa fa-whatsapp"></i></a>

                </div>
            </div>
        </div>


        /* <div>
             <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/")}
                        to="/"
                    >
                        Home
                    </Link>
                </li>
    
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/shop")}
                        to="/shop"
                    >
                        Shop
                    </Link>
                </li>
    
                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/admin/dashboard")}
                            to="/admin/dashboard"
                        >
                            Dashboard
                        </Link>
                    </li>
                )}
    
                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/signin")}
                                to="/signin"
                            >
                                Signin
                            </Link>
                        </li>
    
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/signup")}
                                to="/signup"
                            >
                                Signup
                            </Link>
                        </li>
                    </Fragment>
                )}
    
                {isAuthenticated() && (
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            style={{ cursor: "pointer", color: "#ffffff" }}
                            onClick={() =>
                                signout(() => {
                                    history.push("/");
                                })
                            }
                        >
                            Signout
                        </span>
                    </li>
                )}
            </ul>
        </div> */
    );
};

export default withRouter(Menu);