import React from "react";

import { useMediaQuery, useTheme } from "@material-ui/core";

import {
  HvHeader,
  HvHeaderBrand,
  HvHeaderNavigation,
  HvHeaderActions,
  HvButton,
} from "@hv/uikit-react-core";
import { Menu, ThemeSwitcher } from "@hv/uikit-react-icons";

import { useLocation, useHistory } from "react-router-dom";

import HitachiLogo from "./HitachiLogo";

function Header({ navigationData, toogleBurguerMenu, changeTheme }) {
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

      {!isXs && (
        <HvHeaderActions>
          <HvButton icon aria-label="Change theme" onClick={() => changeTheme("switch")}>
            <ThemeSwitcher />
          </HvButton>
        </HvHeaderActions>
      )}
    </HvHeader>
  );
}

export default Header;
