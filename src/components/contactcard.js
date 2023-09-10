import React from "react";

const CardContact = (props) => {
  const { contact } = props; // Destructure the contact prop

  return (
    <div className="item">
      <div className="content">
        <div className="header">{contact.name}</div>
        <div>{contact.email}</div>
        <div>
          <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }}></i>
        </div>
      </div>
    </div>
  );
};

export default CardContact;
