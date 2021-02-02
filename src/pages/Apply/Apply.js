import React from "react";

import { HvInput } from "@hv/uikit-react-core";

import useStyles from "./styles";

export default function Apply() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <HvInput
        name="name"
        required
        label="Full name"
        description="Provide your full legal name"
        placeholder="Your name"
      />
    </form>
  );
}
