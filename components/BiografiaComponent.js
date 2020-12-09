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
      <div className="text-container">
        <h2>Sección sobre vida personal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
          nibh a est fermentum efficitur. Aliquam tempus lectus at nunc lacinia,
          ut finibus nisi venenatis. In hac habitasse platea dictumst. Donec
          sollicitudin suscipit sem, eget rhoncus turpis venenatis nec. Quisque
          pulvinar a nunc ut tempor. Aenean sem velit, consectetur sed varius
          nec, molestie nec odio. Sed vitae eleifend lectus, porttitor elementum
          est. In ante mi, dictum in ante accumsan, congue tempor nisi.e.
          <br />
          Morbi interdum congue eleifend. Etiam in elit orci. Aenean suscipit ac
          elit sit amet posuere. Morbi pretium diam a massa congue, in volutpat
          neque suscipit. Phasellus urna diam, tempor eget convallis vel,
          lobortis eget felis. Phasellus pulvinar urna sit amet magna luctus
          malesuada. Donec sed risus lectus. Suspendisse eget finibus ante, nec
          consequat felis.
        </p>
      </div>
      <CommentComponent name="Nombre y Apellido" cargo="Cargo">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur."
      </CommentComponent>
      <div className="text-container">
        <h2>Sección sobre tu carrera profesional</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
          nibh a est fermentum efficitur. Aliquam tempus lectus at nunc lacinia,
          ut finibus nisi venenatis. In hac habitasse platea dictumst. Donec
          sollicitudin suscipit sem, eget rhoncus turpis venenatis nec. Quisque
          pulvinar a nunc ut tempor. Aenean sem velit, consectetur sed varius
          nec, molestie nec odio. Sed vitae eleifend lectus, porttitor elementum
          est. In ante mi, dictum in ante accumsan, congue tempor nisi.e.
          <br />
          Morbi interdum congue eleifend. Etiam in elit orci. Aenean suscipit ac
          elit sit amet posuere. Morbi pretium diam a massa congue, in volutpat
          neque suscipit. Phasellus urna diam, tempor eget convallis vel,
          lobortis eget felis. Phasellus pulvinar urna sit amet magna luctus
          malesuada. Donec sed risus lectus. Suspendisse eget finibus ante, nec
          consequat felis.
        </p>
      </div>
      <CommentComponent name="Nombre y Apellido" cargo="Cargo">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur."
      </CommentComponent>
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
