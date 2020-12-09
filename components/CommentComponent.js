import React, { Fragment } from "react";

export default function Comment(props) {
  return (
    <Fragment>
      <div className="comment">
        <div className="comment-container">
          <div className="person-data">
            <img src="img/marcela-retrato.png" alt="comentario usuario" />
            <div>
              <h3>{props.name}</h3>
              <h4>{props.cargo}</h4>
            </div>
          </div>
          <div className="comment">
            <p>{props.children}</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .comment {
            width: 100%;
          }
          .comment-container {
            width: 60%;
            min-height: 30vh;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-color: #eaeaea;
            padding: 2rem;
          }
          .person-data {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
            flex-direction: row;
          }
          img {
            margin-right: 2rem;
            height: 50px;
            width: 50px;
            object-fit: cover;
            border-radius: 50%;
          }
          div {
            display: flex;
            flex-direction: column;
          }
          h3 {
            font-family: "Poppins";
            color: #626262;
            font-weight: 400;
          }
          h4 {
            font-family: "Poppins";
            color: #626262;
            font-weight: 300;
          }
          @media (max-width: 800px) {
            .text-container {
              width: 85%;
            }
            .comment-container {
              width: 85%;
            }
            h3 {
              font-size: 1.2rem;
            }
            h4 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </Fragment>
  );
}
