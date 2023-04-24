import React from "react";
import "./QZone.css";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone3.png";
import qZone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="mt-3 zone w-100">
      <h3 className="pt-4 ps-3">Q-zone</h3>
      <div className="px-3 text-center">
        <img className="img-fluid" src={qZone1} alt="" />
        <img className="img-fluid" src={qZone2} alt="" />
        <img className="img-fluid" src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
