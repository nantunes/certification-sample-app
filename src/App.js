import React from "react";

import { HvProvider, HvFooter } from "@hv/uikit-react-core";

import useStyles from "./styles";

import Header from "./components/Header/Header";
import Landing from "./pages/Landing/Landing";

function App() {
  const classes = useStyles();

  return (
    <HvProvider>
      <Header />

      <main className={classes.main}>
        <article className={classes.article}>
          <Landing />
        </article>
      </main>

      <HvFooter />
    </HvProvider>
  );
}

export default App;
