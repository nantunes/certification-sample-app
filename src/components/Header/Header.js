import React from "react";

import { useMediaQuery, useTheme } from "@material-ui/core";

import { HvHeader, HvHeaderBrand, HvHeaderNavigation, HvButton } from "@hv/uikit-react-core";
import { Menu } from "@hv/uikit-react-icons";

import { useLocation, useHistory } from "react-router-dom";

import HitachiLogo from "./HitachiLogo";

function Header({ navigationData, toogleBurguerMenu }) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const location = useLocation();
  const history = useHistory();

  const handleChange = (_event, nav) => {
    history.push(nav.id);
  };

  return (
    <HvHeader>
      {!isMdUp && (
        <HvButton icon onClick={toogleBurguerMenu} style={{ width: "auto" }}>
          <Menu />
        </HvButton>
      )}

      <HvHeaderBrand logo={<HitachiLogo />} name={!isXs ? "HV UI Kit Certification" : undefined} />

      {isMdUp && (
        <HvHeaderNavigation
          data={navigationData}
          selected={location.pathname}
          onClick={handleChange}
        />
      )}
    </HvHeader>
  );
}

export default Header;
