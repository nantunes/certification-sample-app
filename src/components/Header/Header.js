import React from "react";

import { useMediaQuery, useTheme } from "@material-ui/core";

import { HvHeader, HvHeaderBrand } from "@hv/uikit-react-core";

import HitachiLogo from "./HitachiLogo";

function Header() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <HvHeader>
      <HvHeaderBrand logo={<HitachiLogo />} name={!isXs ? "HV UI Kit Certification" : undefined} />
    </HvHeader>
  );
}

export default Header;
