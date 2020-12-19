import React from "react";

export default function envios() {
  return (
    <div>
      <div className="envios-container">
        <h2>Información de envíos</h2>
        <p>
          <strong>En Tucumán:</strong> Envíos gratuitos!
        </p>
        <p>
          <strong>Resto de Argentina:</strong> Se realizan los envíos mediante
          Correo Argentino a la sucursal más cercana a tu domicilio.
        </p>
      </div>
      <style jsx>{`
        .envios-container {
          display: flex;
          min-height: 90vh;
          width: 80%;
          margin: auto;
          flex-direction: column;
          justify-content: center;
        }
        h2 {
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
}
