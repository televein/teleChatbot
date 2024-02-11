import React from "react";
import pdfImg from "./images/pdf.png"

const pdf = ({ pd }) => {
  return (
    <div>
        <a href={pd} className="pdf" target="_blank" rel="noopener noreferrer">
            <img src={pdfImg} width={200} height={200} alt="pdf"></img>
        </a>
    </div>
  );
};

export default pdf;