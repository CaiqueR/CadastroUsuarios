import React from "react";

import NavItem from "./NavItem/NavItem";
import "./Nav.css";

const Nav = () => (
  <aside className="menu-area">
    <nav className="menu">
      <NavItem icon="home" name="Início" link="/" />
      <NavItem icon="users" name="Usuários" link="/users" />
    </nav>
  </aside>
);

export default Nav;
