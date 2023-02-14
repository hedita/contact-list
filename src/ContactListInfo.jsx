import React, { Fragment, useState } from "react";

function ContactListInfo({ email, sports }) {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const handleInfoVisibility = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <>
      <button className="info-button" onClick={handleInfoVisibility}>
        {isInfoVisible ? "Hide Info" : "Show Info"}
      </button>
      {isInfoVisible ? (
        <>
          <p className="email">{email}</p>
          {sports.map(({ id, name }) => {
            return (
              <p key={id} className="sports-name">
                {name}
              </p>
            );
          })}
        </>
      ) : null}
    </>
  );
}

export default ContactListInfo;
