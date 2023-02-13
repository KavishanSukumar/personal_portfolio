import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import "./about.css";
import { CiStar } from "react-icons/ci";

const AchievementsModel = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      OpenModelAchievements: () => OpenModelAchievements(),
      CloseModelAchievements: () => CloseModelAchievements(),
    };
  });

  const OpenModelAchievements = () => {
    setDisplay(true);
  };
  const CloseModelAchievements = () => {
    setDisplay(false);
  };
  if (!display) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div className="container modal__wrapper">
        <div onClick={CloseModelAchievements} className="modal__backdrop" />
        <div className="modal__box">
          <div className="aboutmecomponent__container">
            <h3>Extra Curricular Activities</h3>
            <div className="aboutmecomponent__content">
              <article className="aboutmecomponent__details">
                <CiStar className="aboutmecomponent__details-icon" />
                <div>
                  <h4>Member of Computer Society</h4>
                  <small className="text-light">
                    St Peter's College, Colombo 04
                  </small>
                </div>
                <div style={{ textAlign: "right" }}>
                  <small className="text-light">2014-2015</small>
                </div>
              </article>
              <article className="aboutmecomponent__details">
                <CiStar className="aboutmecomponent__details-icon" />
                <div>
                  <h4>Secretary of Information Technology Unit</h4>
                  <small className="text-light">
                    Noor International School, Kalutara South
                  </small>
                </div>
                <div style={{ textAlign: "right" }}>
                  <small className="text-light">2014-2015</small>
                </div>
              </article>
              <article className="aboutmecomponent__details">
                <CiStar className="aboutmecomponent__details-icon" />
                <div>
                  <h4>Prefect</h4>
                  <small className="text-light">
                    Noor International School, Kalutara South
                  </small>
                </div>
                <div style={{ textAlign: "right" }}>
                  <small className="text-light">2014-2015</small>
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
export default AchievementsModel;
