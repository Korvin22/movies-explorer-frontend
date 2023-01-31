import Header from "../Header/Header";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import promo_fig from "../../images/figure_mainpage.svg"
function Promo(props) {
  return (
    <>
      <div className="promo__header">
        <img src={logo} className="logo" alt="Logo"/>
        <Link to="/signup" className="promo__link">
          Регистрация
        </Link>
        <Link to="/signin">
          <button className="promo__button">Войти</button>
        </Link>
      </div>
      <div className="promo__banner">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img src={promo_fig} className="promo__img" alt="Banner picture"/>
      </div>
    </>
  );
}

export default Promo;
