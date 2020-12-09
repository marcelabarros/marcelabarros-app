import React from "react";
import FajaCard from "./FajaCardComponent";
import { useState } from "react";

export default function FajaSection(props) {
  const dataRaise = (sizeSelected, colorSelected) => {
    props.dataRaise(sizeSelected, colorSelected);
    // console.log(sizeSelected, colorSelected);
  };

  return (
    <section id="faja-section">
      <div className="section-container">
        <div className="image-container">
          <img src="img/faja-modelos.png" alt="modelos de faja modeladora" />
        </div>
        <div className="card-container">
          <FajaCard producData={props.productData} dataRaise={dataRaise} />
        </div>
        <img src="img/CONFORT.png" alt="confort" id="confort" />
        <img src="img/DURABILIDAD.png" alt="confort" id="durabilidad" />
      </div>
    </section>
  );
}
