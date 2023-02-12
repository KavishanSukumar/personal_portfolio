import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "./loading.css";

export default function Loading() {
  return (
    <div className="container-loading-page">
      <HashLoader color="#2A2A67" size={100} />
    </div>
  );
}
