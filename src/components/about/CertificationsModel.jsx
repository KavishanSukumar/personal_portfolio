import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import "./about.css";
import { TbFileCertificate } from "react-icons/tb";

const CertificationsModel = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      OpenModelCertifications: () => OpenModelCertifications(),
      CloseModelCertifications: () => CloseModelCertifications(),
    };
  });

  const OpenModelCertifications = () => {
    setDisplay(true);
  };
  const CloseModelCertifications = () => {
    setDisplay(false);
  };
  if (!display) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div className="container modal__wrapper">
        <div onClick={CloseModelCertifications} className="modal__backdrop" />
        <div className="modal__box">
          <div className="aboutmecomponent__container">
            <h3>Certifications</h3>
            <div className="aboutmecomponent__content">
              <article
                style={{ gridTemplateColumns: "1fr 11fr " }}
                className="aboutmecomponent__details"
              >
                <TbFileCertificate className="aboutmecomponent__details-icon" />
                <div>
                  <h4>Design Patterns, University of Alberta, Coursera.org</h4>
                </div>
              </article>
              <article
                style={{ gridTemplateColumns: "1fr 11fr " }}
                className="aboutmecomponent__details"
              >
                <TbFileCertificate className="aboutmecomponent__details-icon" />
                <div>
                  <h4>Advanced MySQL Topics, Meta, Coursera.org</h4>
                </div>
              </article>
              <article
                style={{ gridTemplateColumns: "1fr 11fr " }}
                className="aboutmecomponent__details"
              >
                <TbFileCertificate className="aboutmecomponent__details-icon" />
                <div>
                  <h4>What is Data Science?, IBM , Cousera.org</h4>
                </div>
              </article>
              <article
                style={{ gridTemplateColumns: "1fr 11fr " }}
                className="aboutmecomponent__details"
              >
                <TbFileCertificate className="aboutmecomponent__details-icon" />
                <div>
                  <h4>Bootcamp with ShapeAI, 2021</h4>
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
export default CertificationsModel;
