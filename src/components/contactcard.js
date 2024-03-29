import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact; // Destructure the contact prop

  return (
    <div className="item">
        <br></br>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <div>
        <i className="trash alternate outline icon" style={{ color: "red" , marginTop: "7px"}} 
        onClick={()=>props.clickHandler(id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
