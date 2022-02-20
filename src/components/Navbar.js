import React, { useState } from "react";
import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <div
          onClick={handleHamburgerMenu}
          className={isOpen ? "menu-icon" : "menu-icon-close"}
        >
          <MenuIcon />
        </div>
      )}
      <div className={isOpen ? "navbar" : "navbar-close"}>
        <div onClick={handleHamburgerMenu} className="menu-icon">
          <MenuIcon />
        </div>
        <div className="navbar-wrapper">
          <div className="title-container">Barış Güzel</div>
          <ul className="navbar-container">
            <li className="list-item">Home</li>
            <li className="list-item">Info</li>
            <li className="list-item">Education</li>
            <li className="list-item">Deneme</li>
            <li className="list-item">Contacts</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
