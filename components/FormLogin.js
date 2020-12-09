import { useState, useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import { useRouter } from "next/router";

export default function FormLogin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userData, setUserData } = useContext(UserContext);
  const router = useRouter();

  if (userData.user) {
    router.push("/");
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const userToLogin = { username, password };
    const loginRes = await axios.post(
      "https://marcela-barros.herokuapp.com/api/account/login",
      userToLogin
    );
    localStorage.setItem("auth-token", loginRes.data.token);
    setUserData(loginRes);
    router.push("/");
    window.location.reload();
  };

  return (
    <div className="form-login-container">
      <form action={props.action} method={props.method} onSubmit={onFormSubmit}>
        <h2>Inicio de Sesión</h2>
        <p>Nombre de usuario</p>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <p>Contraseña</p>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </div>
  );
}
