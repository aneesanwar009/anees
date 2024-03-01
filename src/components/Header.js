import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="header" className="header-wraper">
      <div className="main-info">
        <br></br>
        <br></br>
        <h1>SALEM DISPATCH</h1>
        <div className="main-text">
          
        
        </div>
        <Typed
          className="typed-text"
          strings={[
            "Hotshot Dispatch Service",
            "Dry Van Dispatch Service",
            "Step Deck Dispatch Service",
            "Flatbed Dispatch Services",
            "Box Truck Dispatch Service",
            "Power Only Dispatch Services",
            "Reefer Truck Dispatch Services",
            
          
          ]}
          typeSpeed={50}
          backSpeed={60}
          loop
        />

        <div className="main-text">
       
        </div>
        <div className="header-btns">
        <div className="hire_btn_blink--container ">
          <Link smooth={true} to="hire" href="#" offset={-84} className="btn-main-offer hire_btn_blink">
            Contact me
          </Link>
          </div>
          <Link smooth={true} to="contact" href="#" offset={-84} className="btn-main-offer">
            discuss 
          </Link>
        </div>
      </div>
      <div className="header-overlay"></div>
    </div>
  );
};

export default Header;
