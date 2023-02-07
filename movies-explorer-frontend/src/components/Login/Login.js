import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import FormErrors from "../FormErrors/FormErrors";
import useForm from "../../hooks/UseForm";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isRender, setIsRender] = useState(false);
  const { values, handleChange, setValues } = useForm({});

  const [errorMail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleUserEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleUserPassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  function validateEmail(value) {
    setEmailValid(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
  }
  function validatePassword(value) {
    setPasswordValid(value.length >= 6);
  }

  function linkRender() {
    setIsRender(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAutharization({
      email: values.email,
      password: values.password,
    });
    props.handleLogin();
    console.log(props.handleLogin);
  }

  return (
    <div className="login">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <div className="register__container">
        <h2 className="register__title">Рады видеть!</h2>
        <form
          className="register__form"
          name="email-and-password"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="register__label">
            E-mail
          </label>
          <input
            required
            type="text"
            name="email"
            className="register__input_login"
            placeholder="Email"
            minLength="2"
            maxLength="30"
            id="email"
            value={email}
            onChange={handleUserEmail}
          />
          <label htmlFor="password" className="register__label">
            Пароль
          </label>
          <input
            required
            type="password"
            name="password"
            className="register__input_login"
            placeholder="Пароль"
            id="password"
            value={password}
            onChange={handleUserPassword}
          />
          <button className="register__button" type="submit">
            Войти
          </button>
        </form>
        <div className="register__wrapper">
          <p className="register__text">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="register__link">
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
