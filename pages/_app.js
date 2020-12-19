//Styles import

// import "../styles/globals.css";
import "../styles/globalStyle.scss";
import "../styles/NavBarStyle.scss";
import "../styles/BannerStyle.scss";
import "../styles/BiografiaStyle.scss";
import "../styles/ButtonStyle.scss";
import "../styles/ConfirmationStyle.scss";
import "../styles/FajaCardStyle.scss";
import "../styles/FajaSectionStyle.scss";
import "../styles/GallerySection.scss";
import "../styles/TestimoniosStyle.scss";
import "../styles/HeroStyle.scss";
import "../styles/OrdersListStyle.scss";
import "../styles/PanelControlStyle.scss";
import "../styles/StockProductStyle.scss";
import "../styles/FormLoginStyle.scss";
//Context
import userContext from "../context/UserContext";
//Compoennts import
import NavBar from "../components/NavBarComponent";
import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

let selection = {
  size: {},
  color: {},
};

const dataRaise = (sizeSelected, colorSelected) => {
  selection.size = sizeSelected;
  selection.color = colorSelected;
};

function MyApp({ Component, pageProps }) {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLogIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "https://marcela-barros.herokuapp.com/api/account/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await axios.get(
          "https://marcela-barros.herokuapp.com/api/account",
          {
            headers: { "x-auth-token": token },
          }
        );
        setUserData({
          token: token,
          user: userRes.data,
        });
      }
    };
    checkLogIn();
  }, []);

  return (
    <Fragment>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
            crossorigin="anonymous"
          />
          <title>Marcela Barros IFBB pro</title>
          <meta
            name="description"
            content="Web personal de Marcela Barros, atleta profesional 2020."
          />
          <meta name="robots" content="index, follow" />
        </Head>
        <NavBar />
        <Component {...pageProps} dataRaise={dataRaise} selection={selection} />
      </UserContext.Provider>
    </Fragment>
  );
}

export default MyApp;
