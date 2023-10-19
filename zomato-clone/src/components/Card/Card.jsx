import React from 'react'
import "./Card.scss"
import Dine from "../../assets/Dine-Out.png"
import Night from "../../assets/Night-Life.png"
import Online from "../../assets/Online-Food.png"

const Card = () => {
    return (
        <div className="card">
            <div className="cardImg">
                <img src={Online} alt="dine-img" />
                <h1>Order Online</h1>
                <span>Stay home and order to your doorsteps</span>
            </div>

            <div className="cardImg">
                <img src={Night} alt="dine-img" />
                <h1>Nightlife and clubs</h1>
                <span>Explore the city's top nightlife outlets</span>
            </div>

            <div className="cardImg">
                <img src={Dine} alt="dine-img" />
                <h1>Dinning</h1>
                <span>Views the city's favorite venues</span>
            </div>
        </div>
    )
}

export default Card