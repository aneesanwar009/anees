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
          
        <h3> 
         
          At Salam Dispatch, we go above and beyond to provide you with exceptional services. As your personal dispatcher, we offer 24/7 support, negotiate top paying rates, and even assist with quick payment percentages. We handle all the paperwork, check broker's credit scores, and provide fuel advance options to keep you on the road. 
          
         
        </h3>
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
        <h3>
        Our dedicated team is here to offer driver director assistance and handle detention issues. With our comprehensive collection of services, you can focus on what you do best – driving – while we take care of the rest.
        </h3>
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
