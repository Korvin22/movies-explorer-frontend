import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import {useFormWithValidation} from "../../hooks/UseForm";

function Register(props) {

  const { values, handleChange, errors, isValid, resetForm } =
  useFormWithValidation();
  return (
    <div className="register">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <div className="register__container">
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" name="email-and-password">
          <label htmlFor="user-name" className="register__label">
            Имя
          </label>
          <input
            required
            type="text"
            name="user-name"
            className="register__input"
            placeholder="Имя"
            minLength="2"
            maxLength="30"
            id="user-name"
            onChange={handleChange}
            value={values.name}
          />
          <span className="register__error">{errors.user}</span>
          <label htmlFor="email" className="register__label">
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
            value={values.email}
            onChange={handleChange}
          />
          <span className="register__error">{errors.email}</span>
          <label htmlFor="password" className="register__label">
            Пароль
          </label>
          <input
            required
            type="password"
            name="password"
            className="register__input"
            placeholder="Пароль"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
          <span className="register__error">{errors.password}</span>
          <button className="register__button" type="submit">
            Войти
          </button>
        </form>
        <div className="register__wrapper">
          <p className="register__text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
