import React, { Fragment } from "react";

export default function Success() {
  return (
    <Fragment>
      <section id="success">
        <h2>
          Compra realizada exitosamente! Para coordinar el envío del producto
          envíame un whatsapp en el siguiente enlace!
        </h2>
        <a href="https://wa.me/5493814661789">Click aquí!</a>
      </section>
      <style jsx>
        {`
          #success {
            min-height: 100vh;
            width: 90%;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
          }
          a {
            font-size: 2rem;
            margin-top: 3rem;
            cursor: pointer;
          }
        `}
      </style>
    </Fragment>
  );
}
