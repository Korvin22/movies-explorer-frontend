import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useFormWithValidation} from "../../hooks/UseForm"

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isRender, setIsRender] = useState(false);

  function linkRender() {
    setIsRender(true);
  }

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

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
            value={values.email || ""}
            onChange={handleChange}
          />
          <p className="register__error">{errors.email}</p>
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
            value={values.password || ""}
            onChange={handleChange}
          />
          <p className="register__error">{errors.password}</p>
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
