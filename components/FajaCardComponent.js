import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Link from "next/link";
import axios from "axios";

export default function FajaCard(props) {
  // leveling up state
  const dataRaise = (size, color) => {
    props.dataRaise(size, color);
  };

  let history = useHistory();

  const [data, setData] = useState({});
  const [sizeSelected, setSizeSelected] = useState({ size: null, index: null });
  const [colorSelected, setColorSelected] = useState({
    color: null,
    index: null,
  });
  let selection = [sizeSelected, colorSelected];
  let temp;

  let selectionCommand = String(
    temp + "[" + sizeSelected.index + "].Object[2]"
  );

  const isInStock = () => {
    if (sizeSelected.size !== null && colorSelected.color !== null) {
      temp = String(`data.size[${sizeSelected.index}]`);
      let selection = String(
        `${temp}[0].${sizeSelected.size}[${colorSelected.index}].${colorSelected.color}`
      );
      return eval(selection);
    }
  };

  useEffect(() => {
    const productRequest = async () => {
      const data = await axios.get(
        "https://marcela-barros.herokuapp.com/api/product/faja",
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      );
      setData(data.data);
    };
    productRequest();
  }, []);

  let renderedSizes;
  const handleRenderedSizes = () => {
    if (data.name !== undefined) {
      renderedSizes = data.size.map((size, index) => {
        let name = size[1].name;
        return (
          <div
            className={`talle ${name === sizeSelected.size ? "selected" : ""}`}
            key={index}
            onClick={() => setSizeSelected({ size: name, index: index })}
          >
            {name.toUpperCase()}
          </div>
        );
      });
    }
  };
  handleRenderedSizes();

  let renderedColors;
  const handleRenderedColors = () => {
    if (data.name !== undefined) {
      let colors = ["pink", "blue", "green"];
      renderedColors = colors.map((color, index) => {
        return (
          <div
            className={`color ${
              color === colorSelected.color ? "selected" : ""
            }`}
            onClick={() => {
              setColorSelected({ color: color, index: index });
            }}
            key={index}
          >
            {color}
          </div>
        );
      });
    }
  };
  handleRenderedColors();

  const stockTitleHandler = () => {
    if (sizeSelected.size === null || colorSelected.color === null) {
      return <div>Elegir Modelo</div>;
    } else {
      return <div>SIN STOCK</div>;
    }
  };

  return (
    <div id="faja-card">
      {!data.name ? <h3>Cargando...</h3> : null}
      <div className={`product-container ${isInStock() ? "" : "no-stock"}`}>
        <img src="img/faja-product.png" alt="faja card" />
        <div className="gradient"></div>
        <h3>{stockTitleHandler()}</h3>
      </div>

      <h4>{data.name}</h4>
      <p>Sistema único en el mercado</p>
      <div className="talles-container">{renderedSizes}</div>
      <div className="colors-container">{renderedColors}</div>
      <a href="https://api.whatsapp.com/send/?phone=5493814661789&text=Hola%21+Necesito+informaci%C3%B3n+sobre+talles+especiales.&app_absent=0">
        Consultar talles especiales.
      </a>
      <Link href="/confirmacion">
        <button
          onClick={
            isInStock()
              ? () => {
                  dataRaise(sizeSelected, colorSelected);
                }
              : null
          }
          className={`comprar-button ${isInStock() ? "" : "no-stock"}`}
        >
          Comprar
        </button>
      </Link>
    </div>
  );
}
