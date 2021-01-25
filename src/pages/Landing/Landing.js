import React from "react";

import { HvLink } from "@hv/uikit-react-core";

import logo from "./logo.png";

import useStyles from "./styles";

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt="logo" />
      <p>
        Edit the code in <code>src</code> and save to reload.
      </p>
      <HvLink route="https://lumada-design.github.io/">Use the HV UI Kit</HvLink>
    </div>
  );
}
