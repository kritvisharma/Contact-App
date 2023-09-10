import React from  "react";
import ContactCard from "./contactcard";


const contactlist= (props)=>{

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact = {contact}></ContactCard>
        )
    })
    return (
        <div className = "ui celled list">
            {renderContactList}
        </div>
    );
};

export default contactlist;