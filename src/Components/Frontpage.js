import React from "react";

export default function Frontpage(){
    return(
        <div className="container">
        {/* <div className="container"> */}
            <div className="frontPage">
                <div className="frontPage-parts" id="frontPage-part1">
                    <div id="frontPage-part1-text">
                    <div id="frontPage-part1-text-heading">
                    <h1>Become a part <br />of the growth <br />revolution</h1>
                    </div>
                    <div id="frontPage-part1-text-para">
                    <p>A workplace of innovative thinkers who share a passion for
                        unlocking the secret of bussiness growth. We want to unlock the 
                        true you.
                    </p>
                    </div>
                    </div>
                    <div id="frontPage-part1-button">
                    <button>
             <p id="text" className="cursor">Apply Now</p> <img id="rocket" src="./images/rocket.png" alt="ic" />
                        </button>                    
                    </div>
                </div>
                <div className="frontPage-parts" id="frontPage-part2">
                    <img src="./images/art2.svg" alt="nothing" />
                </div>
            </div>
        </div>
        // </div>
    )
}