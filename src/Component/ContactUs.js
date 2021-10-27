import React from "react";
import "../Styles/ContactCard.css";
import MyPic from "../Assets/MyPic.jpg";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function ContactUs() {
  return (
    <div className="contactCard">
      <img
        src={MyPic}
        style={{
          width: "250px",
          height: "230px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        alt="Niraj's"
      ></img>
      <hr />
      <p>Niraj Pandey</p>
      <p>Software Engineer</p>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <LinkedInIcon
          size="small"
          onClick={() => {
            window.open("https://www.linkedin.com/in/imnirajpandey/", "_blank");
          }}
        />
        <GitHubIcon
          size="small"
          onClick={() => {
            window.open("https://github.com/nirajpandey034", "_blank");
          }}
        />
        <WhatsAppIcon
          size="small"
          onClick={() => {
            window.open("https://wa.link/n56xmc", "_blank");
          }}
        />
        <MailOutlineIcon
          size="small"
          onClick={() => {
            window.open("mailto:nirajpandey034@gmail.com", "_blank");
          }}
        />
      </div>
    </div>
  );
}

export default ContactUs;
