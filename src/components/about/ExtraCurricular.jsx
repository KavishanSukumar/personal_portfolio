import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import "./about.css";
import { CiStar } from "react-icons/ci";

const ExtraCurricularModel = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      OpenModelExtraCurricular: () => OpenModelExtraCurricular(),
      CloseModelExtraCurricular: () => CloseModelExtraCurricular(),
    };
  });

  const OpenModelExtraCurricular = () => {
    setDisplay(true);
  };
  const CloseModelExtraCurricular = () => {
    setDisplay(false);
  };
  if (!display) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div className="container modal__wrapper">
        <div onClick={CloseModelExtraCurricular} className="modal__backdrop" />
        <div className="modal__box">
          <div className="aboutmecomponent__container">
            <h3>Extra Curricular Activities</h3>
            <div className="aboutmecomponent__content">
              <article className="aboutmecomponent__details">
                <CiStar className="aboutmecomponent__details-icon" />
                <div>
                  <h4>Member of Exploration Club</h4>
                  <small className="text-light">
                    University of Colombo School of Computing
                  </small>
                </div>
                <div style={{ textAlign: "right" }}>
                  <small className="text-light">2020 - 2021</small>
                </div>
              </article>
              <article className="aboutmecomponent__details">
                <CiStar className="aboutmecomponent__details-icon" />
                <div>
                  <h4>Member of Computer Society</h4>
                  <small className="text-light">
                    St Peter's College, Colombo 04
                  </small>
                </div>
                <div style={{ textAlign: "right" }}>
                  <small className="text-light">2016-2018</small>
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
export default ExtraCurricularModel;
