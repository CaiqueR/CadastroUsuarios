import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./NavItem.css";

const NavItem = ({ icon, name, link }) => (
  <Link className="nav-item" to={link}>
    <i className={`fa fa-${icon}`} /> {name}
  </Link>
);

export default NavItem;

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
