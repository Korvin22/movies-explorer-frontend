import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <img src={logo} className="logo" />
      <div className="header__wrapper">
        <Link to="/movies" className="header__link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header__link">
          Сохраненные фильмы
        </Link>
      </div>
      <Link to="/profile">
        <img src={profile} />
      </Link>
    </div>
  );
}

export default Header;
