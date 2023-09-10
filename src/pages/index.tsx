import React from "react";
import "./index.css";

const Heading1: React.FC = () => {
  return (
    <div className="backroud">
      <div className="content">
        <img src={"/image-qr-code.png"} alt="img-code" />
        <h1 className="">Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take vour coding skills
          tC the next level
        </p>
      </div>
    </div>
  );
};

export default Heading1;
