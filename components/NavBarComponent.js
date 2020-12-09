import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import Link from "next/link";
// import { Link } from "react-router-dom";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const { userData, setUserData } = useContext(UserContext);

  const onBurgerClick = () => {
    setNavActive(!navActive);
  };

  const handleBodyOverflow = () => {
    document.querySelector("body").classList.toggle("active");
    document.querySelector("html").classList.toggle("active");
  };

  return (
    <header>
      <div className="nav-container">
        <nav>
          <div className="logo-container">
            <Link
              href="/"
              onClick={() => {
                document.querySelector("body").classList.remove("active");
                setNavActive(false);
              }}
            >
              <h1 id="logo">Marcela Barros IFBB PRO</h1>
            </Link>
          </div>
          <ul className={`nav-links ${navActive ? "active" : ""}`}>
            <Link href="/biografia">
              <li
                className="nav-link"
                onClick={() => {
                  document.querySelector("body").classList.remove("active");
                  setNavActive(!navActive);
                }}
              >
                Biografía
              </li>
            </Link>
            <Link href="/faja">
              <li
                className="nav-link"
                onClick={() => {
                  document.querySelector("body").classList.remove("active");
                  setNavActive(!navActive);
                }}
              >
                Productos
              </li>
            </Link>
            <Link href="/galeria">
              <li
                className="nav-link"
                onClick={() => {
                  document.querySelector("body").classList.remove("active");
                  setNavActive(!navActive);
                }}
              >
                Galería
              </li>
            </Link>

            {!userData.user ? (
              <Link href="/login">
                <li
                  className="nav-link"
                  onClick={() => {
                    document.querySelector("body").classList.remove("active");
                    setNavActive(!navActive);
                  }}
                >
                  Iniciar Sesión
                </li>
              </Link>
            ) : (
              <Link href="/stock">
                <li
                  className="nav-link"
                  onClick={() => {
                    document.querySelector("body").classList.remove("active");
                    setNavActive(!navActive);
                  }}
                >
                  Stock
                </li>
              </Link>
            )}
          </ul>
          <div
            className="burger"
            onClick={() => {
              document.querySelector("body").classList.toggle("active");
              onBurgerClick();
            }}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
