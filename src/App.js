import React, { useState, useReducer } from "react";

import { HvProvider, HvFooter } from "@hv/uikit-react-core";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import useStyles from "./styles";

import Header from "./components/Header/Header";
import VerticalNavigation from "./components/VerticalNavigation/VerticalNavigation";
import Landing from "./pages/Landing/Landing";
import Apply from "./pages/Apply/Apply";

const navigationData = [
  {
    id: "/",
    label: "Home",
  },
  {
    id: "/apply",
    label: "Apply for job",
  },
];

const themeReducer = (state, action) => {
  if (action === "switch") {
    return state === "dawn" ? "wicked" : "dawn";
  }

  return state;
};

function App() {
  const classes = useStyles();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuIsOpen = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const [theme, changeTheme] = useReducer(themeReducer, "dawn");

  return (
    <HvProvider uiKitTheme={theme}>
      <BrowserRouter>
        <Header
          navigationData={navigationData}
          toogleBurguerMenu={toggleMenuIsOpen}
          changeTheme={changeTheme}
        />

        <main className={classes.main}>
          <VerticalNavigation
            navigationData={navigationData}
            isOpen={menuIsOpen}
            toggleOpen={toggleMenuIsOpen}
            changeTheme={changeTheme}
          />

          <article className={classes.article}>
            <Switch>
              <Route exact path="/">
                <Landing />
              </Route>

              <Route exact path="/apply">
                <Apply />
              </Route>

              <Redirect to="/" />
            </Switch>
          </article>
        </main>

        <HvFooter />
      </BrowserRouter>
    </HvProvider>
  );
}

export default App;
