import React from 'react';
import { NavLink } from 'react-router-dom';


const NavigationComponent = props => {

    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        )
    }

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
            </div>
        </div>
    )
}

export default NavigationComponent;