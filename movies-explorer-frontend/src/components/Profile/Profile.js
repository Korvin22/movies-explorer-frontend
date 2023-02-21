import Header from "../Header/Header";
import line from "../../images/line.svg";
import { Link } from "react-router-dom";

function Profile(props) {
  return (
    <>
      <Header />
      <div className="profile">
        <h2 className="profile__title">Привет, Дмитрий!</h2>
        <form className="profile__form" name="profile" noValidate>
          <p className="profile__label">Имя</p>
          <input
            id="username"
            dir="rtl"
            name="username"
            className="profile__input"
            value="Дмитрий"
          />
          <img src={line} className="profile__line" />
          <img src={line} className="profile__line" />
          <p className="profile__label">Почта</p>
          <input
            id="username"
            dir="rtl"
            name="username"
            className="profile__input"
            value="dmitry@ya.ru"
          />
        </form>
        <button className="profile__edit-button">Редактировать</button>
        <Link className="profile__link" to="/signin">
          Выйти из аккаунта
        </Link>
      </div>
    </>
  );
}

export default Profile;
