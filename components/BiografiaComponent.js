import React, { Fragment } from "react";
// import "./BiografiaStyle.scss";
import ButtonComponent from "./ButtonComponent.js";
import CommentComponent from "./CommentComponent";
import Link from "next/link";

export default function Biografia() {
  return (
    <Fragment>
      <section id="biografia">
        <div className="image-container">
          <img src="img/marcela-retrato.png" alt="retrato de marcela" />
        </div>
        <div className="text-container">
          <h3>Quién es Marcela Barros</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum,
            eget proin sit sed fermentum in porttitor mattis. Cursus at augue
            curabitur faucibus nunc est id mattis donec. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Fermentum, eget proin sit sed
            fermentum
          </p>
          <Link
            href="/galeria"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <ButtonComponent
              background="#ce382c"
              text="Ver Galería"
              color="white"
              className="button-galeria"
              hrefto="/galeria"
            />
          </Link>
        </div>
      </section>
      <style jsx>
        {`
          .text-container {
            width: 60%;
            margin: auto;
            color: #626262;
            margin-bottom: 2rem;
          }
          .text-container h2 {
            margin: 2rem 0rem;
          }
          @media (max-width: 800px) {
            .text-container {
              width: 85%;
            }
          }
        `}
      </style>
    </Fragment>
  );
}
