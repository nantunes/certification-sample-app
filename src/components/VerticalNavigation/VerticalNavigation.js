import React from "react";

import { useMediaQuery, useTheme } from "@material-ui/core";

import {
  HvVerticalNavigation,
  HvVerticalNavigationTree,
  HvVerticalNavigationActions,
  HvVerticalNavigationAction,
} from "@hv/uikit-react-core";
import { ThemeSwitcher } from "@hv/uikit-react-icons";

import { useLocation, useHistory } from "react-router-dom";

const VerticalNavigation = ({ navigationData, isOpen, toggleOpen, changeTheme }) => {
  const location = useLocation();
  const history = useHistory();

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const handleChange = (_event, nav) => {
    history.push(nav.id);
    toggleOpen();
  };

  if (!isOpen) return null;

  return (
    <HvVerticalNavigation
      isCollapsable={false}
      isOpen={isOpen}
      toggleOpenCallback={toggleOpen}
      style={{ marginBottom: 5 }}
    >
      <HvVerticalNavigationTree
        data={navigationData}
        selected={location.pathname}
        onClick={handleChange}
      />
      {isXs && (
        <HvVerticalNavigationActions>
          <HvVerticalNavigationAction
            label="Change theme"
            icon={<ThemeSwitcher />}
            onClick={() => changeTheme("switch")}
          />
        </HvVerticalNavigationActions>
      )}
    </HvVerticalNavigation>
  );
};

export default VerticalNavigation;
