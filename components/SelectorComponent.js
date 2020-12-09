import React, { useState } from "react";
import axios from "axios";

export default function SelectorComponent({
  size,
  name,
  status,
  index,
  colorIndex,
}) {
  const [colorName] = useState(name);
  const [colorStatus, setStatus] = useState(status[0]);

  const handleOnStatusCHange = async () => {
    let colorStatusSent = !colorStatus;
    const res = await axios.put(
      "https://marcela-barros.herokuapp.com/api/product/faja",
      {
        colorName: colorName,
        colorStatus: colorStatusSent,
        product: "Faja Modeladora",
        size: size,
        sizeIndex: index,
        colorIndex: colorIndex,
      }
    );
  };

  return (
    <h4
      onClick={() => {
        handleOnStatusCHange();
        setStatus(!colorStatus);
      }}
      className={`color-panel ${colorStatus}`}
    >
      {name.toUpperCase()}
    </h4>
  );
}
