import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={CV} download="Sukumar_Kavishan_SE.pdf">
        Download&nbsp;CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Lets's&nbsp;Talk
      </a>
    </div>
  );
};

export default CTA;
