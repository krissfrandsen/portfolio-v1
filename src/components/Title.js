import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="section__title">
      <h2>{title || "default title"}</h2>

      <div className="subtitle">
        <div className="subtitle__underline"></div>
        <h4>{subtitle || ""}</h4>
        <div className="subtitle__underline"></div>
      </div>
    </div>
  );
};

export default Title;
