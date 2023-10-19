import React from 'react'
import "./Collection.scss";
import Collection1 from "../../assets/collection1.webp"
import Collection2 from "../../assets/collection2.webp"
import Collection3 from "../../assets/collection3.webp"
import Collection4 from "../../assets/collection4.webp"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Collection = () => {
    return (
        <div className="collection">
            <h1>Collection</h1>
            <div className="collectionText">
                <p>Explore curated list of top restaurants, cafe's, pubs, bars in Varansi, based on trends</p>
                <span>
                    All collection in Varansi <KeyboardArrowRightIcon />
                </span>
            </div>
            <div className="collectionCard">
                <div className="collectionImg">
                    <img src={Collection1} alt="collection1-img" />
                    <h3>9 must visit places for Christmas</h3>
                    <span>9 Places <KeyboardArrowRightIcon /></span>
                </div>

                <div className="collectionImg">
                    <img src={Collection2} alt="collection1-img" />
                    <h3>7 Finest Buffet Places</h3>
                    <span>7 Places <KeyboardArrowRightIcon /></span>
                </div>

                <div className="collectionImg">
                    <img src={Collection3} alt="collection1-img" />
                    <h3>Top 8 Picturesque Cafes</h3>
                    <span>8 Places <KeyboardArrowRightIcon /></span>
                </div>

                <div className="collectionImg">
                    <img src={Collection4} alt="collection1-img" />
                    <h3>10 Best Luxury Dining Places</h3>
                    <span>10 Places <KeyboardArrowRightIcon /></span>
                </div>
            </div>
        </div>
    )
}

export default Collection