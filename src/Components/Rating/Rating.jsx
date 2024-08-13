import React, { useState } from "react";
import "./Rating.css";
import rate from "./Rate";
import Thank from "../Thank/Thank";

const Rating = () => {
  const [rating, setRating] = useState(rate);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleClick =  (id) => {
    setSelected(id);
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      {submitted ? (
        <Thank selectedRating={selected} />
      ) : (
        <div className="rating_container">
          <div className="image_container">
            <img src="/images/icon-star.svg" alt="Star" />
          </div>

          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <form onSubmit={handleSubmit}>
            <ul>
              {rating.map((rateValue) => (
                <li key={rateValue.id}>
                  <button
                    className="rateButton"
                    type="button"
                    onClick={() => handleClick(rateValue.id)}
                    style={{
                      backgroundColor:
                        selected === rateValue.id
                          ? "hsl(25, 97%, 53%)"
                          : "hsla(216, 19%, 29%, 0.165)",
                    }}
                  >
                    {rateValue.rate}
                  </button>
                </li>
              ))}
            </ul>
            <button className="btn" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Rating;
