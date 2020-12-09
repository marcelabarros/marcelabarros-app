import React from "react";

export default function Banner() {
  return (
    <div id="banner">
      <div className="banner-container">
        <div className="person-data">
          <img src="img/marcela-retrato.png" alt="comentario usuario" />
          <div>
            <h3>Nombre y apellido</h3>
            <h4>Cargo</h4>
          </div>
        </div>
        <div className="comment">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur."
          </p>
        </div>
      </div>
    </div>
  );
}
