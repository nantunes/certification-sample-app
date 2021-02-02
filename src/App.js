import React, { useState } from "react";

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

function App() {
  const classes = useStyles();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuIsOpen = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <HvProvider>
      <BrowserRouter>
        <Header navigationData={navigationData} toogleBurguerMenu={toggleMenuIsOpen} />

        <main className={classes.main}>
          <VerticalNavigation
            navigationData={navigationData}
            isOpen={menuIsOpen}
            toggleOpen={toggleMenuIsOpen}
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
