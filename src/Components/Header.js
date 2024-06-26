import React from "react";
export default function header(){
return(
  

        <div className="container" >
        <div className="header">
            <div className="header1">
                <img src="./images/leftmenu2.svg" alt="Logo" />
            </div>
            <div id="navHeader">
            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADMzMzw8PCwsLBvb28qKiqTk5P4+PisrKydnZ1bW1vFxcXY2NiMjIx7e3u2trY3NzdCQkJNTU2mpqbe3t4iIiLPz89ISEhWVla6uro9PT3y8vLl5eV2dnYSEhKsb8XkAAAA/klEQVR4nO3bW07DMBBAUZMUSB8k5VFKm0D3v0tYQC3xMdIYes4OrjySf2ZKAQAAAAAAAAAAAADg73ka79szreIC93dteo4KXLJLqsagwl12SNVLUGGXHVL1GlRYskOq3qIKD+/ZKddNUYGlDMeuQYe4QAAAAAAAAAAAAAC4Mf36sT2bLi6w1WX9bVTgkF1StQkqbPei5EPhL/3/KW32EU9RgaUs+1WDAn8LAAAAAAAAAAAAALgx59NDe+ZpCQscsxe6a/qgwM/skKqvoMJzdkjVHFR4zA6pCjtHmLNLanZRhf02O+Wqyzoq8MfSN2gIDAQAAAAAAAAAAAAAaMU3FnQd+0IAHb0AAAAASUVORK5CYII=" alt="" />
            </div>
            <div className="header2">
                <div className="header2-parts cursor">Home</div>
                <div className="header2-parts">
                    <label htmlFor="#" className="cursor">Company</label>
                    <select name="companyDropdown" id="dropdown1"></select>
                </div>
                <div className="header2-parts">
                <label htmlFor="#" className="cursor">Platform</label>
                    <select name="platformDropdown" id="dropdown2"></select>
                </div>
                <div className="header2-parts">
                <label htmlFor="#" className="cursor">Resources</label>
                    <select name="resourcesDropdown" id="dropdown3"></select>
                </div>
            </div>
            <div className="header3">
                <div id="header3-part1">
                    <a href="#" className="cursor">Log in</a>
                </div>
                <div id="header3-part2">
                    <button><p className="cursor"> Create Account</p></button>
                </div>
            </div>
            
        </div>
        </div>   
)
}