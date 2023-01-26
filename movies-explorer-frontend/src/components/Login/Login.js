import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
function Login(props) {
  return (
    <div className="register">
      <img alt="лого" src={logo} className="logo" />
      <div className="register__container">
        <h2 className="register__title">Рады видеть!</h2>
        <form className="register__form" name="email-and-password" noValidate>
          <label for="email" className="register__label">
            E-mail
          </label>
          <input
            required
            type="text"
            name="email"
            className="register__input"
            placeholder="Email"
            minLength="2"
            maxLength="30"
            id="email"
          />
          <label for="password" className="register__label">
            Пароль
          </label>
          <input
            required
            type="password"
            name="password"
            className="register__input"
            placeholder="Пароль"
            id="password"
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
