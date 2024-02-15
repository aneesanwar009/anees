import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const serviceID = "service_mlzeuef";
  const template_ID = "template_pnena7n";
  const userID = "KJBjqLTeG8WX-sLeR";

  const sendEmail = (e) => { 
    e.preventDefault();

    if (process.env.NODE_ENV === "production") {
      onSubmitForm();
      emailjs.sendForm(serviceID, template_ID, form.current, userID).then(
        (result) => {
          console.log(result.text);
          myFunction();
          onSubmitFormExit();
        },
        (error) => {
          console.log(error.text);
          onSubmitFormExit();
        }
      );
    } else {
      console.log("API call skipped in development mode");
      // For development, you might want to simulate success
      myFunction();
      onSubmitFormExit();
    }
  };

  function onSubmitForm() {
    document.getElementById("submit-contact-spinner").style.display = "block";
    document.getElementById("class-spinner-relative").style.opacity = "0.2";
  }

  function onSubmitFormExit() {
    document.getElementById("submit-contact-spinner").style.display = "none";
    document.getElementById("class-spinner-relative").style.opacity = "1";
  }

  function myFunction() {
    var x = document.getElementById("myDivSuccess");
    x.style.display = "block";
    setTimeout(function () {
      var x = document.getElementById("myDivSuccess");
      x.style.display = "none";
    }, 7000);
  }

  return (
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1>Contact...!</h1>
        <p>
          Please fill out the form, and I will contact you as soon as possible.
        </p>
      </div>
      <div className="container container-padding">
        <form
          id="contactForm"
          className="contact-form pb-0"
          ref={form}
          onSubmit={sendEmail}
        >
          <div id="class-spinner-relative" className="row">
            <div className="col-md-6 col-xs 12">
              {/* Name Input */}
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name*"
                name="name"
                required
              />

              {/* Phone Input */}
              <input
                id="phone"
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
              />

              {/* Email Input */}
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email*"
                name="email"
                required
              />

             
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                {/* Description Input */}
                <textarea
                  id="description"
                  type="text"
                  className="form-control"
                  placeholder="Please describe briefly..."
                  name="description"
                />
                <div className="line"></div>
              </div>
            </div>
          </div>

          <button className="btn-main-offer contact-btn" type="submit">
            SEND MESSAGE
          </button>
        </form>

        <div id="submit-contact-spinner" className="submit-contact-spinner">
          <div className="spinner__inner-container">
            <div
              id="spinner__item"
              className="spinner-border text-warning "
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>

        <p id="myDivSuccess" className="container">
          Thank you. I have received your message and will be contacting you soon.
          Cheers!
        </p>
      </div>
    </div>
  );
};

export default Contact;
