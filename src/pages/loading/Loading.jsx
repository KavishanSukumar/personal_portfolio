import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "./loading.css";

export default function Loading() {
  return (
    <div className="container-loading-page">
      <HashLoader color="#4bd5ff" className="loader__icon" size={100} />
    </div>
  );
}
