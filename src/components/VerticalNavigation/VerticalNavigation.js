import React from "react";

import { HvVerticalNavigation, HvVerticalNavigationTree } from "@hv/uikit-react-core";

import { useLocation, useHistory } from "react-router-dom";

const VerticalNavigation = ({ navigationData, isOpen, toggleOpen }) => {
  const location = useLocation();
  const history = useHistory();

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
    </HvVerticalNavigation>
  );
};

export default VerticalNavigation;
