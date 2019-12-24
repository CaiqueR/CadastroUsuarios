import React from "react";

import Header from "../Header/Header";

import "./Main.css";

const Main = ({ icon, title, subtitle, ...props }) => (
  <React.Fragment>
    <Header icon={icon} title={title} subtitle={subtitle} />
    <main className="content container-fluid">
      <div className="p-3 mt-3">{props.children}</div>
    </main>
  </React.Fragment>
);

export default Main;
