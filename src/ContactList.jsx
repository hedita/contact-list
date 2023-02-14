import React, { Fragment } from "react";
import People from "./ContactListData";
import ContactListInfo from "./ContactListInfo";

function ContactList() {
  return People.map(
    ({ id, avatar, firstName, lastName, phoneNumber, email, sports }) => {
      return (
        <div key={id} className="contact-card">
          <img className="avatar" src={avatar} />
          <div className="contact-details">
            <p>
              {firstName} {lastName}
            </p>
            <p>Mobile {phoneNumber}</p>
          </div>
          <ContactListInfo email={email} sports={sports} />
        </div>
      );
    }
  );
}

export default ContactList;
