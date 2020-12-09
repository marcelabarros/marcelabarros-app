import React from "react";

export default function Confirmacion(props) {
  return (
    <section className="confirmation">
      <form
        className="details"
        action="https://marcela-barros.herokuapp.com/api/product/pay"
        method="POST"
      >
        <input
          name="size"
          value={props.selection.size.size}
          className="hide"
          readOnly
        />
        <input
          name="color"
          value={props.selection.color.color}
          className="hide"
          readOnly
        />
        <h2>Confirmación de Pedido</h2>
        <h4>
          Talle:{" "}
          {props.selection.size.size
            ? props.selection.size.size.toUpperCase()
            : "Por favor seleccionar un talle"}
        </h4>
        <h4>
          Color:{" "}
          {props.selection.color.color
            ? props.selection.color.color
            : "Por favor seleccionar un color"}
        </h4>
        <div>
          <label>Nombre</label>
          <input type="text" required name="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" required name="email" />
        </div>
        <div>
          <label>Número de Teléfono</label>
          <input type="tel" required name="telefono" />
        </div>
        <button type="submit">Comprar</button>
      </form>
    </section>
  );
}
