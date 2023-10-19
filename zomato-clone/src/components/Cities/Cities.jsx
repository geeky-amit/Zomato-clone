import React from 'react'
import "./Cities.scss"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Cities = ({ incr }) => {
    return (
        <div className="cities">
            <h1> Popular localities in and around <span>Varanasi</span> </h1>

            <div className="cityContainer">
                <div className="city">
                    <div className="cityLeft">
                        <h3>Bodakdev</h3>
                        <span>345 Places</span>
                    </div>
                    <div className="icon">
                        <ChevronRightIcon />
                    </div>
                </div>

                <div className="city">
                    <div className="cityLeft">
                        <h3>Satellite</h3>
                        <span>336 Places</span>
                    </div>
                    <div className="icon">
                        <ChevronRightIcon />
                    </div>
                </div>

                <div className="city">
                    <div className="cityLeft">
                        <h3>Gurukul</h3>
                        <span>86 Places</span>
                    </div>
                    <div className="icon">
                        <ChevronRightIcon />
                    </div>
                </div>

                <div className="city">
                    <div className="cityLeft">
                        <h3>Navrangpura</h3>
                        <span>173 Places</span>
                    </div>
                    <div className="icon">
                        <ChevronRightIcon />
                    </div>
                </div>

                <div className="city">
                    <div className="cityLeft">
                        <h3>Vastrapur</h3>
                        <span>235 Places</span>
                    </div>
                    <div className="icon">
                        <ChevronRightIcon />
                    </div>
                </div>

                <div className="city">
                    <div className="cityLeft">
                        <h3>Thaltej</h3>
                        <span>222 Places</span>
                    </div>
                    <div className="icon">
                        <ChevronRightIcon />
                    </div>
                </div>

                <div className="city">
                    <div className="cityLeft">
                        <h3>Prahalad Nagar</h3>
                        <span>181 Places</span>
                    </div>
                    <div className="icon">
                        <ChevronRightIcon />
                    </div>
                </div>

                <div className="city">
                    <div className="cityLeft">
                        <h3>C G Road</h3>
                        <span>94 Places</span>
                    </div>
                    <div className="icon">
                        <ChevronRightIcon />
                    </div>
                </div>

                <div className="city">
                    <div className="cityLeft">
                        <h3>See more</h3>

                    </div>
                    <div className="icon">
                        <ChevronRightIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cities