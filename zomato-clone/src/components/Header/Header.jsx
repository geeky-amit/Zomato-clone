import React from 'react'
import "./Header.scss"
import Logo from "../../assets/Zomato-Logo.png"

const Header = () => {
    return (
        <div className="header">
            <nav >
                <span>Get the App</span>
                <div className="right">
                    <span>Invester Relations</span>
                    <span>Add restaurants</span>
                    <span>Log In</span>
                    <span>Sign Up</span>
                </div>
            </nav>

            <div className="headerContent">
                <img src={Logo} alt="logo-img" />
                <h3>Discover the best food & drinks in Varanasi</h3>
                <div className="input">
                    <select name="" id="" >
                        <option value="chennai">Chennai</option>
                        <option value="jaipur">Jaipur</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="kolkata">Kolkata</option>
                    </select>
                    |
                    <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
                </div>
            </div>
        </div>
    )
}

export default Header