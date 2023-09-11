import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { name, email } = props.contact; // Destructure the contact prop

  return (
    <div className="item">
        <br></br>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <div>
        <span className="trash alternate outline icon" style={{ color: "red" , marginTop: "7px"}}></span>
      </div>
    </div>
  );
};

export default ContactCard;
