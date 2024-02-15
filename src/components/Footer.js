import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <h3 className="mb-2 text-light font-weight-bold">Information</h3>
            <div className="d-flex">
              <p><b>Address:</b> 800 North Spring Street Winston Salem NC 27101</p>
            </div>
            <div className="d-flex">
              <p><b>Call Now:</b> &nbsp;</p>
              <a href="tel:+923136986981">+1 (818) 826-4134</a>
            </div>
            <div className="d-flex">
              <p><b>Call Timing:</b> 24/7 </p>
            </div>
            <div className="d-flex">
              <p><b>Working days:</b> Monday - Saturday</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="row footer-links">
              <div className="col">
                <h3 className="mb-2 text-light font-weight-bold links-title">
                  Links
                </h3>

                <Link
                  smooth={true}
                  offset={-84}
                  to="header"
                  className="footer-nav"
                >
                  Home
                </Link>
                <br />
                <Link
                  smooth={true}
                  offset={-84}
                  to="about"
                  className="footer-nav"
                >
                  About me
                </Link>
                <br />
                <Link
                  smooth={true}
                  offset={-84}
                  to="services"
                  className="footer-nav"
                >
                  Services
                </Link>
                <br />
                <Link
                  smooth={true}
                  offset={-84}
                  to="experience"
                  className="footer-nav"
                >
                  Experience
                </Link>
                <br />
                <Link
                  smooth={true}
                  offset={-84}
                  to="portfolio"
                  className="footer-nav"
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  smooth={true}
                  offset={-84}
                  to="contact"
                  className="footer-nav"
                >
                  Contacts
                </Link>

                <br />
                <Link
                  smooth={true}
                  offset={-84}
                  to="hire"
                  className="footer-nav"
                >
                  Hire me
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center mb-2">
              <h3 className="mb-2 text-light font-weight-bold">Share with..</h3>
            </div>
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/saqlain.ch1?mibextid=ZbWKwL"}
                quote={"#"}
                hashtag=""
              >
                <FacebookIcon url={"https://www.facebook.com/saqlain.ch1?mibextid=ZbWKwL"} className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={""}
                quote={""}
                hashtag=""
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"#"}
                quote={"#"}
                hashtag=""
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"#"}
                quote={"#"}
                hashtag=""
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;eComVita | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
