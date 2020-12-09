import { Fragment, useContext } from "react";
import UserContext from "../context/UserContext";
import PanelControl from "../components/PanelControlComponent";
import { useRouter } from "next/router";
import Form from "../components/FormLogin";

const config = {
  action: "https://marcela-barros.herokuapp.com/api/account/login",
  method: "POST",
  buttonText: "Iniciar Sesión",
};

export default function stock() {
  const { userData } = useContext(UserContext);
  const router = useRouter();

  return (
    <Fragment>
      {userData.user ? (
        <PanelControl />
      ) : (
        <Form
          action={config.action}
          method={config.method}
          buttonText={config.buttonText}
        />
      )}
    </Fragment>
  );
}
