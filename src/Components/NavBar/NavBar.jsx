import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import style from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <img src={Logo} className={style.logo} />
        <p className={style.logo_text}>GIO</p>
      </div>
      <div className={style.mid}>
        <ul className={style.list}>
          <li>
            <Link className={style.list_elements} to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className={style.list_elements} to="/nosotros">
              Nosotros
            </Link>
          </li>
          <li>
            <Link className={style.list_elements} to="/servicios">
              Servicios
            </Link>
          </li>
          <li>
            <Link className={style.list_elements} to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.right}>
        <div className={style.right_component}></div>
      </div>
    </div>
  );
};

export default NavBar;
