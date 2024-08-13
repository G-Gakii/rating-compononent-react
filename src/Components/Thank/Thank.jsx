import React from "react";
import "./Thank.css";

const Thank = ({ selectedRating }) => {
  return (
    <div className="thank_container">
      <img
        src="/images/illustration-thank-you.svg"
        alt="Mobile device issuing receipt, with credit card on the left."
      />
      <p>You selected {selectedRating} out of 5</p>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thank;
