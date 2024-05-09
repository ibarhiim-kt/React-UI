import React from "react";

export default function Fifthpage(){
    return(
        <div className="fifthPage">
            <div id="fifthPage-part1">
                <div id="fifthPage-part1-options">
                <div className="custom">
                <select id="department" >
                <option value="department">Department</option>
                
                </select> 
                <div id="customImage">
                <img src="./images/dd.svg" alt="dd"/>   
                </div>               
                </div>
                <div className="custom2">
                <select id="position">
                     <option value="position">Position</option>                     
                </select>
                <div id="customImage">
                <img src="./images/dd.svg" alt="dd"/>   
                </div>
                </div>
                </div>
                <div id="search">
                <img src="./images/search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            {/* <hr className="hr"/> */}
            <div id="fifthPage-part2">
                <div id="fifthPage-part2-heading">
                    <h4>Full Stack Software Engineer</h4>
                    <div id="fifthPage-paras">
                        <p>Engineering </p><div id="line"></div>
                        <p>Principal L6 </p><div id="line"></div>
                        <p>Remote</p>
                    </div>
                </div>
                <div id="fifthPage-part2-para">
                    <p>Responsible for designing, developing, and deploying software applications across the full stack of web technologies..</p>
                </div>
                <div id="fifthPage-part2-button">
                <button><p id="buttonPara" className="cursor">Learn More </p><img src="./images/arrow.png" alt="" />
                </button>
                    
                </div>
            </div>
            <div id="fifthPage-part2">
                <div id="fifthPage-part2-heading">
                    <h4>Product Marketing Manager</h4>
                    <div id="fifthPage-paras2">
                        <p>Marketing </p><div id="line"></div>
                        <p>Marketing Manager </p><div id="line"></div>
                        <p>Dalla, TX</p>
                    </div>
                </div>
                <div id="fifthPage-part2-para">
                    <p>Responsible for developing marketing plans and strategies for specific products or product lines, including conducting..</p>
                </div>
                <div id="fifthPage-part2-button">
                    <button><p id="buttonPara" className="cursor">Learn More </p><img src="./images/arrow.png" alt="" /></button>
                    
                </div>
            </div>
            
        </div>
    )
}