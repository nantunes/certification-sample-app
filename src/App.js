import React from "react";

import { HvProvider, HvFooter } from "@hv/uikit-react-core";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import useStyles from "./styles";

import Header from "./components/Header/Header";
import Landing from "./pages/Landing/Landing";

function App() {
  const classes = useStyles();

  return (
    <HvProvider>
      <BrowserRouter>
        <Header />

        <main className={classes.main}>
          <article className={classes.article}>
            <Switch>
              <Route exact path="/">
                <Landing />
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
