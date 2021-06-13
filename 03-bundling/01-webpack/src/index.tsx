import React from "react";
import ReactDOM from "react-dom";
import classes from './styles.scss';
import logoImg from './content/logo_1.png';

ReactDOM.render(
  <div className={classes.header}>
    <img src={logoImg} />
    <h1 className={classes.headerTitle}>Hello World!!</h1>
  </div>,
  document.getElementById("root")
);
