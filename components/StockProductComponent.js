import React, { useEffect, useState } from "react";
import SelectorComponent from "./SelectorComponent";

export default function StockProduct(props) {
  let sizeName = props.data[1].name;
  let temp = String(`props.data[0].${sizeName}`);
  let sizeIndex = props.index;

  const renderedColors = eval(temp).map((color, index, Rest) => {
    let colorName = Object.keys(color);
    let colorStatus = Object.values(color);
    colorName = colorName[0];
    return (
      <SelectorComponent
        size={sizeName}
        name={colorName}
        status={colorStatus}
        index={sizeIndex}
        colorIndex={index}
      />
    );
  });

  return (
    <div className="product-card">
      <h3>Talle: {props.data[1].name.toUpperCase()}</h3>
      <div>{renderedColors}</div>
    </div>
  );
}
