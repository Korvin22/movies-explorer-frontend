import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import NavTab from "../NavTab/NavTab";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  function openBurger() {
    setIsOpen(true);
  }

  function closeBurger() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="header">
        <img src={logo} className="logo" />
        <Navigation />
      </div>
      <div className="header_mobile">
        <img src={logo} className="logo" />
        <button className="header__burger" onClick={openBurger}></button>
      </div>
      <div className={`burger ${isOpen ? "burger_opened" : "burger_closed"}`}>
        <NavTab onClose={closeBurger}/>
      </div>
    </>
  );
}

export default Header;
