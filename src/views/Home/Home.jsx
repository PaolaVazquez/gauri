import React from "react";
import Coding from "../../assets/images/coding.png";

export const HomeG = () => {
  return (
    <header className=" py-3">
      <div className="container-fluid">
        <div className="row">
          <img src={Coding} alt="" className="img-fluid header-bg" />
        </div>
      </div>
    </header>
  );
};
