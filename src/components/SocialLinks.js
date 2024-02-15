import React from "react";
import Github from "../images/github.png";
import {
  FacebookIcon,
  TwitterIcon,
 
  WhatsappIcon,
} from "react-share";

const SocialLinks = () => {
  return (
    
    <div className="fixed-social-links">
      
      <a href="https://web.whatsapp.com/" target="_blank">
        <img className="github-img" src={WhatsappIcon} alt="" />
      </a>
      <a href="https://instagram.com/saqilain_bilal?igshid=MXhseG1kcjIyNG05Yw==" target="_blank">
        <TwitterIcon className="" size={36} />
      </a>
     
     
     
      <a href="https://www.facebook.com/saqlain.ch1?mibextid=ZbWKwL" target="_blank">
        <FacebookIcon className="" size={36} />
      </a>
    </div>
  );
};

export default SocialLinks;
