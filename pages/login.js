import Form from "../components/FormLogin";
const config = {
  action: "https://marcela-barros.herokuapp.com/api/account/login",
  method: "POST",
  buttonText: "Iniciar Sesión",
};

export default function login() {
  return (
    <Form
      action={config.action}
      method={config.method}
      buttonText={config.buttonText}
    />
  );
}
