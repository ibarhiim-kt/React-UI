import React from "react";

export default function Footer(){

    return(
        <div className="footer">
            <img src="./images/footerG.svg" alt="img" id="extraG" />
            <div className="footerPart1">
            <div id="footerPart1-col1" className="footerPart1-parts he">
                <img src="./images/footerG.svg" alt="img" />
            </div>
            <div id="footerPart1-col2" className="footerPart1-parts he">
                <h6>Company</h6>
                
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Partners</a>
                <a href="#">Events</a>
                <a href="#">Press</a>
                
            </div>
            <div id="footerPart1-col3" className="footerPart1-parts he">
                <h6>Platform</h6>
                <a href="#">Platform Overview</a>
                <a href="#">Calendar & Scheduling</a>
                <a href="#">Contacts</a>
                <a href="#">Sites</a>
                <a href="#">Growthbooks</a>
                <a href="">Payments</a>
                <a href="">Listings</a>
            </div>
            <div id="footerPart1-col4" className="footerPart1-parts he">
                <h6>Resources</h6>
                <a href="#">Blog</a>
                <a href="#">Book a demo</a>
                <a href="#">Contact Us</a>
            </div>
            </div>
            <hr id="footerLine"/>
            <div className="footerPart2" >
                <div id="footerPart2-col1">
                    <img src="./images/footerln.svg" alt="linkedIn " />
                </div>
                <div id="footerPart2-col2">
                <a href="#">Terms of use</a>
                <a href="#">Privacy</a>
                <a href="#">Legal</a>
                <a href="#">&copy;Growthware2023</a>
                </div>
            </div>
            </div>
        
    )
}