import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';


const NavigationComponent = props => {

    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        )
    };

    const handleSignOut = () => {
        axios.delete("https://api.devcamp.space/logout", {
            withCredentials: true
        }).then(response => {
            if (response.status === 200) {
                props.history.push("/");
                props.handleSuccessfulLogout();
            }
            return response.data;
        }).catch(error => {
            console.log("error siging out", error);
        })
    };

    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to='/'>Home</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to='/about-me'>About</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
                
                { props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/blog", "Blog") : null }
                
                { false ? <button>Add Blog</button> : null }
            </div>

            <div className="right-side">
                Homer Simpson

                { props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut}>Sign Out</a> : null }
            </div>
        </div>
    )
}

export default withRouter(NavigationComponent);