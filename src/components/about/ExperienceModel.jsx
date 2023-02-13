import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import "./about.css";
import { MdOutlineWorkOutline } from "react-icons/md";

const ExperienceModel = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      OpenModelExperience: () => OpenModelExperience(),
      CloseModelExperience: () => CloseModelExperience(),
    };
  });

  const OpenModelExperience = () => {
    setDisplay(true);
  };
  const CloseModelExperience = () => {
    setDisplay(false);
  };
  if (!display) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div className="container modal__wrapper">
        <div onClick={CloseModelExperience} className="modal__backdrop" />
        <div className="modal__box">
          <div className="aboutmecomponent__container">
            <h3>Experience</h3>
            <div className="aboutmecomponent__content">
              <article className="aboutmecomponent__details">
                <MdOutlineWorkOutline className="aboutmecomponent__details-icon" />
                <div>
                  <h4>Trainee Software Engineer</h4>
                  <small className="text-light">
                    <span style={{ fontWeight: "bold" }}>
                      Inova IT Systems (Pvt) Ltd
                    </span>
                  </small>
                  <br />
                  <small className="text-light">
                    Worked on a number of projects utilizing a variety of
                    technologies. One of my main responsibilities was the
                    development of a Dashboard using ClickUp APIs.
                    <br />
                    <span style={{ fontWeight: "bold" }}>
                      Technologies:&nbsp;
                    </span>
                    Springboot, Power BI, ClickUp API
                  </small>
                </div>
                <div style={{ textAlign: "right" }}>
                  <small className="text-light">2022-Present</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }
});
export default ExperienceModel;
